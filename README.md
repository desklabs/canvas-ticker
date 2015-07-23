# Desk.com Canvas: Agent Time Tracker
The **Agent Time Tracker** is a Desk.com Canvas application that adds a time tracker to cases. It allows you to start and stop the timer with background updates every minute.

## I. Deploy the Application
First, install this application by deploying the source code to your Heroku account. To deploy your application, simply click this button:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fdesklabs%2Fcanvas-ticker)

## II. Create the Integration URL
Now that you have the application on Heroku, go ahead and create the integration URL.

1. In the **Name** field, add a title for the this application. In this example, we’ll you use 'Time Tracker'.

2. The **Description** field, though optional, is a way to give a general description of the integration URL.

3. Select 'Canvas iFrame' from the **Open Location** dropdown.

4. In the **URL** field, add the URL and specify the `field` parameter otherwise it will generate an error. **Note:** `autostart` and `value` are also viable options.

5. Toggle the **Enabled** button to 'Yes' and select the [Permission level](https://support.desk.com/customer/portal/articles/1146981?b_id=7112&t=568640).

6. Click the **Update** button.

### Options specified via URL
* `field` custom field key to use for updates.
* `value` current value of the field
* `autostart` start the ticker automatically as soon as it's loaded

![Integration URL](https://api.monosnap.com/rpc/file/download?id=EEe0KD3qbB2xaRMJDcqUruwtuOiDWT)

## III. Add it to your Case Layout
Now display the canvas application on your Case Layout.

1. **Go to Cases >> Next Gen Case Layouts**

2. Find the **Time Tracker** canvas application in the **Integrations** section on the right side of the screen.

3. **Drag** and **Drop** the application in your case layout.

4. Scroll over the left side of the 'Time Tracker' bar and click on the gear to open the **Edit** window. Adjust the pixel **Height** (e.g., 33) and **Position**, the order in which it appears in Case Details on the dashboard. Click **Save**.

![Case Layout](https://api.monosnap.com/rpc/file/download?id=pZuUDCz0vKMrXRDjFH9hCVcE1i53qh)

## IV. Dashboard Confirmation
After you have added the canvas application to your layout and selected users, open a ticket and you should see the Time Tracker under **Case Details**.

![Preview  Stopped](https://api.monosnap.com/rpc/file/download?id=b709jZIF9uFTYZhIM4gdJQfN8GtgZe)

![Preview  Started](https://api.monosnap.com/rpc/file/download?id=Ly4i9IjoAnnkrrrdqEyJ5njlZtKSDh)
