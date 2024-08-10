import xarray as xr
import matplotlib.pyplot as plt

######info about the dataset######
# Load the NetCDF file
file_path = '../MOHC-HAd/pr_AFR-44_MOHC-HadGEM2-ES_rcp45_r1i1p1_KNMI-RACMO22T_v2_day_20210101-20251230.nc'  #precipitation dataset
# file_path = '../MOHC-HAd-temp/tas_AFR-44_MOHC-HadGEM2-ES_rcp45_r1i1p1_KNMI-RACMO22T_v2_day_20210101-20251230.nc'    #temp dataset
data = xr.open_dataset(file_path)

# View dataset structure
print(data)

# Access a specific variable
pr_data = data['pr']
print(pr_data)

# Plot the data if it's 2D or 3D
pr_data.plot()
###############################
##############################


####################################################
#######get the mean precipitation from these coordinates, 0.0236° S, 37.9062° E #########
# Load the dataset (replace 'your_dataset.nc' with the actual file path)
ds = xr.open_dataset('../MOHC-HAd/pr_AFR-44_MOHC-HadGEM2-ES_rcp45_r1i1p1_KNMI-RACMO22T_v2_day_20210101-20251230.nc')

# Coordinates to look for
target_lat = -0.0236  # S is negative in latitude
target_lon = 37.9062  # E is positive in longitude

# Find the nearest grid point to the specified coordinates
lat_idx = ds.rlat.sel(rlat=target_lat, method='nearest')
lon_idx = ds.rlon.sel(rlon=target_lon, method='nearest')

# Extract the precipitation data for that grid point
precipitation = ds['pr'].sel(rlat=lat_idx, rlon=lon_idx, method='nearest')

# Calculate the mean precipitation over time
mean_precipitation = precipitation.mean(dim='time')

# Print the result
print(mean_precipitation.values)