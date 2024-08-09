import netCDF4 as nc
import pandas as pd
import numpy as np
from datetime import datetime
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import glob
import xarray as xr
import cftime

# Function to process a single NetCDF file
def process_netcdf(file_path):
    dataset = nc.Dataset(file_path)

    ##############################
    ### Checking Dataset Dates ###
    # # Load the NetCDF file into data using xarray
    # data = xr.open_dataset(file_path, decode_times=False)
    
    # # Extract the time period information
    # time_values = data['time'].values

    # # Display the first and last time values to determine the time period covered by the dataset
    # time_period = (time_values[0], time_values[-1])
    # # print(time_period)

    # # Reference date and calendar type
    # ref_date = '1949-12-01 00:00:00'
    # calendar = '360_day'

    # # Convert time values to actual dates
    # dates = cftime.num2date([25590.5, 27389.5], units=f"days since {ref_date}", calendar=calendar)

    # print(dates)
    ############
    ############

    # Extract variable (assuming 'pr' is precipitation)
    pr = dataset.variables['pr'][:]  # Shape could be (time, lat, lon)
    times_cftime = dataset.variables['time'][:]
    times_units = dataset.variables['time'].units

    # Convert cftime to datetime
    times = [nc.num2date(t, times_units) for t in times_cftime]

    # Flatten 'pr' to match the length of 'times' (assuming 'pr' shape is [time, lat, lon])
    pr_flat = pr.reshape(pr.shape[0], -1)  # Reshape to [time, lat*lon]
    
    # Convert from kg/m²/s to mm/s
    pr_flat_mm = pr_flat * 86400   # Convert to mm/s
    
    # Example: Take the mean over spatial dimensions
    pr_flat_mm_mean = pr_flat_mm.mean(axis=1)

    # Create a DataFrame
    df = pd.DataFrame({
        'time': times,
        'pr': pr_flat_mm_mean
    })

    # Extract year from 'time'
    df['year'] = df['time'].apply(lambda x: x.year)
    
    return df

# List of NetCDF files (modify the pattern as needed)
file_pattern = '../MOHC-HAd/*.nc'
file_paths = glob.glob(file_pattern)

# Process all NetCDF files and concatenate the results
all_data = []
for file_path in file_paths:
    df = process_netcdf(file_path)
    all_data.append(df)

# Concatenate all data into a single DataFrame
combined_df = pd.concat(all_data)

# Assuming the time resolution is daily, otherwise, adjust to aggregate data correctly
# Group by year and sum the precipitation
yearly_pr = combined_df.groupby('year')['pr'].sum().reset_index()

print(yearly_pr)

# Define features and target variable
X = yearly_pr[['year']]  # Features
y = yearly_pr['pr']      # Target variable

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
predictions = model.predict(X_test)

# Print the predictions
print(predictions)

# Prepare new data for prediction
new_data = {
    'year': [2024]  # Make sure it's a list or an array
}

new_df = pd.DataFrame(new_data)

# Reorder columns in new_df to match X's column order
new_df = new_df[X.columns]

# Check if the column order matches
print("Columns in new_df:", new_df.columns)
print("Columns in X:", X.columns)

# Predict if columns match
predicted_yield = model.predict(new_df)
print(predicted_yield)
