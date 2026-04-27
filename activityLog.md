# Learning Log

## Entry 1 – Initial Goals and Plan
**Date:** 15 March 2026

### What I Have Done
For this coursework, I decided to focus on learning **p5.js**, a JavaScript library designed for interactive graphics. 
My aim is to learn how to use p5 to build visual and interactive web applications, while also gaining experience collaborating on a real-world programming project in the form of a hackathon. 
Honestly, I was drawn to pretty graphics because I love seeing images develop and I think it is more fun to build upon them. 
Having a focus that is entertaining seems like it will make coding during my Easter break more enjoyable which is always the goal.

To begin, I researched what p5.js is commonly used for and went through the p5js.org site. I spent a week looking through the example codes, playing around with them and changing variables.
This helped me see the wide variety of what I could do and familiarise myself with p5 before the hackathon.

(Later: 26/04, I integrated the googly eyes that are part of the example code to the website as this seemed like a lighthearted addition for the users to be able to interact with, and almost have the eyes watching them, forcing productivity. I added eyelashes and updated values like scaling, this example I found particularly cool as I enjoyed the trig aspect, I am finding code that utilises maths to be my favourite).

**Hackathon**
The hackathon is the open source project that I want to do. 
Firstly, I have chosen to have this format because I wanted to have a group project I can work on in person. 
I think its important to build conversational and team work skills in stressful environments and what better way to do this than during a 24hr session in the MCS? 
DuWit was luckily perfectly timed with this coursework so on the weekend of the 7-8th of March, thats what I participated in. 
Secondly, I had not done a hackathon before so I simply could not pass this up. 
I felt that concentrating for such an extended period of time and fully immersing myself in a project would force me to become comfortable with p5 in order to produce something for the judges.
It did, because I had never done any before that weekend and I felt like I had had a strong start to my p5 journey.

## Entry 2 - My Open Source Project
**Date:** 20 March 2026

### Hackathon
I did the hackathon with three other friends: two specialised in react, and one in d3 so that we could pool our skill sets together in order to create a great project and have an equal workload.
Together we decided to build a scheduler. 
What made this one unique was that it would assign slots of time for tasks based on how productive the user was at that hour. 
Users are able to rate productivity, thus creating a schedule unique and optimised to them and their daily habits, and this was visually represented in graphs to explain and validate assignment patterns.

The scheduler has the day blocked out in one hour segments.
So I decided to create a timer (see a folder dedicated to this) that resets automatically at the top of every hour because I often find that I concentrate better with a sense of urgency. 
Since the hackathon had an f1 theme to its organisation, it was only fitting to have a themed timer. 
The car image is loaded in to a canvas of fixed size and the current time and time left in the hour is used to calculate its progression along a bar, that acts as an x axis that the car travels along.
Speed is worked out by doing distance/time so for future additions to this application, one could have the timer work for any time length as currently, I've hardcoded it to work for an hour.

A difficulty I faced was not sure how to add the application it to the whole site since I've never done any react before.
But the fact that my teammates all focused on different things made it possible for them to help integrate it all together, mirroring real-world development environments.

(Try find me in the images below!)

![Image 1](https://github.com/lydiaa57/Assignment-2-Prog-Black/blob/main/hackathonImg1.JPEG?raw=true)
![Image 1](https://github.com/lydiaa57/Assignment-2-Prog-Black/blob/main/hackathonImg2.JPEG?raw=true)

GitHub was essential for tracking progress and managing versions of out work, especially as we were all focusing on different features so this hackathon helped me become more proficient with its use, especially after having the frustrating problem of solving branching errors. But, it will prove even more useful as the project develops because regular commits will allow me to document incremental changes and critically reflect on development over time.

## Entry 3 - Adding to my project
**Date:** 08 April 2026

### Cool Viuals
I have been adding cool features to my project to make it more interesting visually.

First I decided to make a background. (See public/p5images/sketch3.png). The program to generate it works by creating multiple layers of wavy lines, assigning random vertically positions and rotational values to orient the pattern. A while loop draws stripes until the end of the canvas is reached in order to fully cover it. 

Initially, I was using random colours but this was creating unpleasant images lacking visual cohesion. This highlighted the importance of controlling design choices, so I improved this by using a CSV file containing colour palettes that meant that complimentary colours were picked. Therefore, once I started generating images to use as a background, it took much less time to find one I liked.

Next, I thought it would be fun to try out some typography to make an interesting title. The circular motion is created by using trigonometry to convert polar coordinates (used since the angle varies) to cartesian ones. This is added to the original points to get an offset. Harmonic motion is used to get smooth and continuous motion, and lines are used to follow this motion. I thought this was all really cool because I enjoyed understanding the mathematical aspect and seeing it tie back to A-level physics was such a nostalgic moment.

I found that working on these smaller features and fine tuning them before adding them to my main one so much fun. Next, I think that using p5 an API to create something that p5 doesn't handle itself (it does for basic shapes and colours) to add a more complex feature.

## Entry 4 - Using an API
**Date:** 26 April 2026

### Gradient Background
I followed a [youtube tutorial on gradient backgrounds](https://www.youtube.com/watch?v=Mdt81-7-U18&list=PL0beHPVMklwh3KNAibTZKkHjN4xILaWvE&index=91). Because there is no built in smooth gradient function to p5, I realised that I would have to access the underlying HTML5 canvas API which is the drawing layer that P5 is built upon, so use the lower level set of tools provided.

The main idea of behind the generated background works is that a radial gradients are created and transparency is variable, so they all blend together seamlessly. I used CanvasRendeeringConext2D and the p5 system variable called drawingConexext (which I first encountered on p5.org and was now used as a template) which provides direct access to this sketch canvas, so I accessed using this. As learnt in log3, pastel colours were used since these go together well. 

Integrating createRadialGradient() and addColorStop() was easier when I went through the MDN web documentation which explained it all thoroughly. The tutorial did use Object Oriented Programming for this as it uses a circle class but this was easy to follow since I had done this at A-level, but it would have made it harder for a beginner to this approach.

I then just added the background in and had it so that the colours are randomly generated every-time the site reloads, creating a unique experience every visit. Also, I made minor adjustments for cleanliness to the site such as centering the heatmap and having the timer and heatmap backgrounds seamlessly connect because there was an awkward gap before.

## Entry 4 - Conclusion to my p5 journey
**Date:** 27 April 2026

I have spent the past 2 days writing up the guide for learners (and consequently cutting it down to the specified word count). Hence, I have gotten confident with markdown as I can now navigate making titles, adding in images, links, bullet points, numbered lists which seems like a useful skill to have down that I will surely build upon over time too.

Looking through the different applications of p5 makes me wish that I had used p5 to add in audio- perhaps some background music or sound effect every time that a task is added in/ deleted but as exam season approaches, it is sensible to prioritise revision, bringing this journey to a bittersweet end.

