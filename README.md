##To-Do's
* ~~Differentiate between Active Time & Paused time in Shifts~~
* ~~Determine a way to store multiple trips in localStorage~~
* Finish full trip
  * ~~Break down Active Trips vs Completed Trips component logic~~ 
  * ~~Build TimeStamp for Ending Trip~~
  * ~~EndTrip Link Logic still needs built~~ (Works, but seems like it needs to be better)
  * ~~Build in info Stamping for trips that are running simultaneously.~~
  * ~~Add Placement Index to Create Stamp & StampManager Logic.~~
  * ~~ReWork StampManager (Page refreshes are deleting stamps in the manager & trip)~~
  * ~~Build Build seperate Add-On component that only renders when Add-On Tag is true~~
  * ~~StampManager needs it's stamps stored seperatley. Remove dependence on current trip.~~
  * ~~StampManager needs a trigger to slice(-1) it's values so values can be overwritten properly in a correction is required.~~
  * Build in End shift Functionality
  * Add Gas Expense Tracking
  * Add Stats Support

* Glitches 
  * ~~Infinite new Trip creation on start-trip refresh~~
  * ~~Start-Shift page is always showing blank after new Trip Creation~~
  * Pre-filled in Odom form on Pickup due to Auto Stamp fill-in
  * ~~Stamp overwrites are happening when pulling from localStorage on refresh on multiple trips~~
    * ~~Resolution - Need to flip stamps back upon changing the trip in Trips Form~~
  * ~~Getting error after finalizing one one trip on multi-trip setup~~
  * ~~Start new Trip after trip completion~~
  * ~~Fix Add-On Squence through the standard update Function~~
  * ~~Stamps don't need to reset. Stamps need to be reworked to retain the last two total stamps so that mileage can be tracked properly when switching between trips.~~
  * ~~Stamps are being overwritten improperly when you click the back button to make corrections~~
  * ~~When Switching trips, the StampManager is loggin stamps wrong, it's pulling the wrong stamp based on only the stage. Need to take into account switching trips.~~
  * Need to find a way to get a better determineLink function on EndTrip. Unable to go back properly if there's an error.