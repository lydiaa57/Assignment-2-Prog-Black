# Learning Log

## Entry 1 – Initial Goals and Plan
**Date:** 15 March 2026

### What I Have Done
For this coursework, I decided to focus on learning **p5.js**, a JavaScript library designed for interactive graphics. 
My aim is to learn how to use p5 to build visual and interactive web applications, while also gaining experience collaborating on a real-world programming project in the form of a hackathon. 
Honestly, I was drawn to pretty graphics because I love seeing images develop and I think it is more fun to build upon them. 
Having a focus that is entertaining seems like it will make coding during my Easter break more enjoyable which is always the goal.

To begin, I researched what p5.js is commonly used for and went through the p5js.org site. 


**Hackathon**
The hackathon is the open source project that I want to do. 
Firstly, I have chosen to have this format because I wanted to have a group project I can work on in person. 
I think its important to build conversational and team work skills in stressful environments and what better way to do this than during a 24hr session in the MCS? 
DuWit was lukily perfectly timed with this coursework so on the weekend of the 7-8th of March, thats what I participated in. 
Secondly, I had not done a Hackathon before so I simply could not pass this up. 
I felt that concentrating for such an extended period of time and fully immersing myself in a project would force me to become comfortable with p5 in order to produce something for the judges.
It did, because I had never done any before that weekend and I felt like I had had a strong start to my p5 journey.

## Entry 2 - My Open Source Project
**Date:** 20 March 2026

### Hackathon
I did the hackathon with three other friends: two specialised in react, and one in d3.
Together we decided to build a scheduler. 
What made this one unique was that it would assign slots of time for tasks based on how productive the user was at that hour. 
Users are able to rate productivity, thus creating a schedule unique and optimised to them and their daily habits, and this was visually represented in graphs to explain and validate assignment patterns.

The scheduler has the day blocked out in one hour segements.
So I decided to create a timer (see a folder dedicated to this) that resets automatically at the top of every hour because I often find that I concentrate better with a sense of urgency. 
Since the hackathon had an f1 theme to its organisation, it was only fitting to have a themed timer. 
The car image is loaded in to a canvas of fixed size and the current time and time left in the hour is used to calulate its progression along a bar, that acts as an x axis that the car travels along.
Speed is worked out by doing distance/time so for future additions to this application, one could have the timer work for any time length as currently, I've hardcoded it to work for an hour.

A difficulty I faced was not sure how to add the application it to the whole site since Ive never done any react before.
But the fact that my teammates all focused on different things made it possible for them to help put it all together. 
