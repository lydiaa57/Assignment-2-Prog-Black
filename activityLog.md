# Learning Log

## Entry 1 – Initial Goals and Plan
**Date:** 15 March 2026

### What I Have Done
For this coursework, I decided to learn **p5.js**, a JavaScript library. My aim is to learn how to build visual and interactive web applications, while also gaining experience collaborating on a real-world programming project in the form of a hackathon. 
Honestly, I was drawn to pretty graphics because I love seeing images develop so building them will be entertaining.  Having a focus that is fun seems like it will make coding during my Easter break more enjoyable which is always the goal.

To begin, I researched what p5.js is commonly used for and went through the p5js.org site. I spent a week looking through the example codes, playing around with them and changing variables. This helped me see the wide variety of what I could make and familiarise myself with p5 before the hackathon.

(Later: 26/04, I integrated the googly eyes (part of the example code) to the website as this seemed like a lighthearted addition for the users to be able to interact with via mouse, almost having the eyes watching them, forcing productivity. I added eyelashes and updated values like scaling, this example I found particularly cool as I enjoyed the trig aspect. I'm finding code that utilises maths to be my favourite).

<video controls src="eyes.mp4" title="googly-eyes"></video>

**Hackathon**
My open source project is the hackathon. 
Firstly, I have chosen to have this format because I wanted to have a group project I can work on in person. I think it's important to build conversational and team work skills in stressful environments and what better way to do this than during a 24hr session in the MCS?  Luckily, DuWit perfectly timed with this coursework so I did it from 7-8th of March.  Secondly, I had never done a hackathon before; I couldn't pass this up. 
Concentrating for such an extended period of time and fully immersing myself in a project should force me to become comfortable with p5 in order to produce something great: it did. I hadn't done any before that weekend, and I felt like I had had a strong start to my p5 journey.

## Entry 2 - My Open Source Project
**Date:** 20 March 2026

### Hackathon
I did the hackathon with three other friends: two specialised in react, and one in d3 so that we could pool our skill sets together in order to create a great project and have an equal workload. Together, we decided to build a scheduler.  What made this one unique was that it would assign slots of time for tasks based on how productive the user usually was at that hour. 
Users are able to rate productivity, thus creating a schedule unique and optimised to their daily habits- visually represented in graphs to validate assignment patterns.

The scheduler has the day divided into hour long segments. Consequently, I decided to create a timer that resets automatically at the top of every hour because I often find that I concentrate better with a sense of urgency. Since the hackathon had an f1 theme to its organisation, so was the timer. The race-car image is loaded in to a canvas of fixed size and the current time and time left in the hour is used to calculate its progression along a bar, that acts as an x axis that the car travels along.
Speed is worked out by doing distance/time so for future additions to this application, one could've the timer work for any time length as currently, I've hardcoded it time an hour. 

A difficulty I faced was not sure how to add the application it to the whole site since I've never done any react before. But the fact that my teammates all focused on different things made it possible for them to help integrate it all together, mirroring real-world development environments. Additionally, I wish I had done more p5 as prep in order to have contributed more during th hackathon but experise was still limited, but I shall prepare further next time.

![Image 1](https://github.com/lydiaa57/Assignment-2-Prog-Black/blob/main/hackathonImg1.JPEG?raw=true)
![Image 2](https://github.com/lydiaa57/Assignment-2-Prog-Black/blob/main/hackathonImg2.JPEG?raw=true)

GitHub was essential for tracking progress and managing versions of our work, especially as we were all focusing on different features. I became more proficient with its use, especially after having the frustrating problem of branching and merge errors. GitHub will prove even more useful as the project develops, because regular commits will allow me to document incremental changes and critically reflect on development over time as well as track history which will be useful if I find errors.

## Entry 3 - Adding to my project
**Date:** 08 April 2026

### Cool Viuals
First, I decided to make a background.

![wavy background](public/p5images/sketch3.png)

The program to generate it works by creating multiple layers of wavy lines, assigning random vertical positions and rotational values to orient the pattern. A while loop draws stripes until the end of the canvas is reached, covering it. 

Initially, I was using random colours but this was creating unpleasant images lacking visual cohesion. This highlighted the importance of controlling design choices. I improved this by using a CSV file containing colour palettes that meant that complimentary colours were picked. Therefore, once I started generating images to use as a background, it took much less time to find one I liked.

Next, I chose to try out typography to make an interesting title. Circular motion is created by using trigonometry to convert polar coordinates (used since the angle varies) to cartesian ones. This is added to the original points to get an offset. Harmonic motion is used to get smooth and continuous motion, and lines are used to follow this motion. I thought this was all really fascinating because I enjoyed that I understood the mathematical foundations as it tied back to A-level physics- a nostalgic moment.

I found that working on these smaller features and fine tuning them before adding them to my main one so much fun. Next, I think that using p5 an API to create something that p5 doesn't handle itself to add a more complex feature.

## Entry 4 - Using an API
**Date:** 26 April 2026

### Gradient Background
I followed a [youtube tutorial on gradient backgrounds](https://www.youtube.com/watch?v=Mdt81-7-U18&list=PL0beHPVMklwh3KNAibTZKkHjN4xILaWvE&index=91). Because there is no built in smooth gradient function, I realised that I'd have to access the underlying HTML5 canvas API- the drawing layer that P5 is built upon, so use the lower level set of tools provided.

The main idea of behind the generated background is that radial gradients are created and transparency is variable, blending them together. I used CanvasRendeeringConext2D() and the p5 system variable called drawingConexext() (which I first encountered on p5.org and was now used as a template) which provides direct access to this sketch canvas, so I accessed it using this. As learnt in log3, pastel colours were used since these go together well. 

Integrating createRadialGradient() and addColorStop() was easier when I went through the MDN web documentation, which explained it thoroughly. The tutorial did use Object Oriented Programming for this as it uses a circle class, but this was easy to understand for me since it's A-level content, but it would've made it harder for beginners.

Then, I added the background, and had it so that the colours are randomly generated every time the site reloads, making every visit unique. Also, I made minor adjustments for cleanliness such as centering the heatmap and its and the timer's background seamlessly connect.

<video controls src="gradient-background.mp4" title="gradient-background-screen-rec"></video>

## Entry 4 - Conclusion to my p5 journey
**Date:** 27 April 2026

I've spent the past 2 days writing up the guideForLearners (then cutting it down to the specified word count). Hence, I have gotten confident with markdown as I can now navigate making titles, adding in images, videos, links, bullet points, numbered lists which is a useful skill to have down that I will surely build upon over time too.

Going through p5's different applications p5 makes me wish that I had used p5 to add in audio- perhaps background music or sound effect every time a task is added in/ deleted, but as exam season approaches, it is sensible to prioritise revision, bringing this journey to an end.

Looking back, what I should have done differently is created a rigid timetable for what it was that I wanted to achieve and carve out dedicated time to work on this coursework rather than doing it whenever a free block opened up. This would've been more efficient since I would have saved time not having to decide what to do and also would've been able to do more. But, overall, I am very happy that I chose this library as I found it both entertaining and informative since it is unlike any coding I've done before.
