import xarray as xr
import matplotlib.pyplot as plt

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
