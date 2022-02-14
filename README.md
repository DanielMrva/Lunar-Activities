# Lunar Activities
View this page at https://danielmrva.github.io/Lunar-Activities/


Project Overview:
MOONR8KER is an application that crosses somewhere between astrology and gravitational science. Unlike astrology, instead of deciding behavior based on constellations, we are deciding behavior based on the moon. We know that the moon and it’s gravitational pull has an effect on certain elements here on earth. Something you are probably very familiar with are the changing ocean tides- which are a direct result of the moons gravitational pull. Like oceans, humans are made up of mostly water. Therefore, if the moon has an effect on something as vast as the ocean, we can infer that it is also having an effect on our smalled water based human bodies. Instead of letting the moon shift and move you with no direction, you can learn about it’s patterns and live your life in a way that coincides- rather than fights the moons behavior.

Following the moons behavior to plan ones life is often called "moon-mapping". There are a number of resources online about what behavior is appropriate during which phase. 
To put it simply, this app will help a user who may be interested in harnessing the moons power but may not actively be studying the correlation between moon movement and human behavior. This app will guide them in moon-mapping, or planning certain activities based on where the moon is at and therefore how strong it’s gravitational pull is.

For this app, we categorize where the moon is at in comparison to the earth by using 8 major phases such as full moon, waxing crescent, waning crescent, waxing gibbuous, waning gibbous, first quarter moon, third quarter moon, and new moon. During each phase, as the moons gravity begins to affect the composition within our bodies, it is best to partake in certain activities. We stuck to 9 major types of activities. These were recreational, charity, education, music, diy, cooking, social, busywork, and relaxation.  So for example, during the new moon, which is often described as a good time to start new projects and learn - the app will generate an activity within the category of education. New moon equals learning which equals an educational activity.


How it works - APIs and Javascript:

When a user enters in a date, this app takes moon phase data from https://www.farmsense.net/ for that date and then attributes it to a random activity generated from https://www.boredapi.com. The bored api has activities that are arranged in nine main categories. These categories are then matched to the phase that is most appropriate.

There are three main areas and links to those areas in the nav bar- The main page (MOONR8KER), the main user experience page where they can plan an activity (planning), and the area with saved user activities (mapped).

A user can either scroll down or click "planning" in navigation to be brought to an area where they can generate an event. A user will come to this page looking for guidance on what to do during an upcoming date. They will choose a date on a calendar that they want to harness the moons power. Upon selecting a date, the phase of the moon during that time will display, along with a general description of best practices during that time, followed by a random activity.

This activity automatically saves to the mapped section of the website. The mapped area functions similar to a to-do list. It holds all of the activities that the user may want to take part in. These activities will order itself by date, from closest date to farthest date. These activities can also be removed from the section with the delete button.

Interface Design:

The user experience begins at "the landing page". The main design of this page is to feel airy and open- similar to space. Connections are often made between the ocean being unknown and space being unknown. Both can evoke a sense of calm. Therefore, a calm visual design is displayed with the incorporation of sea pictures and space pictures. 

Common themes in this design are circles, shells, and space. There are three main fonts implemented, one for title, one for subheadings, and one for paragraph text. There are also two main colors. Two colors mimic the appearance of the moon having only two colors. The use of minimal typefaces and colors also keeps the design consistent and clean throughout. The navigation bar is helpful to the user but does not include a lot of content to keep a clean airy appearance.

Screenshots Displayed Below:
![The Page in action](./Assets/css/images/moonr8ker.jpg)
