# Desk.com Canvas Ticker
This is a Desk.com canvas application to add a simple handle ticker on to the case. It allows you to start/stop the timer and updates the case every minute with the current seconds.

## Options specified via URL
* `field` custom field key to use for updates.
* `value` current value of the field
* `autostart` start the ticker automatically as soon as it's loaded

## Preview
![Preview  Stopped](https://api.monosnap.com/rpc/file/download?id=b709jZIF9uFTYZhIM4gdJQfN8GtgZe)
![Preview  Started](https://api.monosnap.com/rpc/file/download?id=Ly4i9IjoAnnkrrrdqEyJ5njlZtKSDh)

## Installation Steps
### Deploy the Application
The first step to install this application is to deploy the source code to your Heroku account. Simply click this button and the application will be deployed.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fdesklabs%2Fcanvas-ticker)

### Create the Integration URL
Now that you have the application on Heroku, go ahead and create the integration URL. You'll need specify the `field` param otherwise it'll throw an error. `autostart` as well as `value` are optional but at least the latter is strongly suggested.

![Integration URL](https://api.monosnap.com/rpc/file/download?id=EEe0KD3qbB2xaRMJDcqUruwtuOiDWT)

### Add it to your Case Layout
The last step is to display your canvas application on your case layout. For this Canvas app, we recommend a height of "33".  Don't forget to set this when adding the app to your Case Layout!

![Case Layout](https://api.monosnap.com/rpc/file/download?id=pZuUDCz0vKMrXRDjFH9hCVcE1i53qh)
