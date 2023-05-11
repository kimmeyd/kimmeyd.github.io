//Variables (Please forgive me for how dirty this is.)
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
//Store the nine sliders
var sliderOne = document.getElementById("s1");
var sliderTwo = document.getElementById("s2");
var sliderThree = document.getElementById("s3");
var sliderFour = document.getElementById("s4");
var sliderFive = document.getElementById("s5");
var sliderSix = document.getElementById("s6");
var sliderSeven = document.getElementById("s7");
var sliderEight = document.getElementById("s8");
var sliderNine = document.getElementById("s9");
//Store the nine outputs
var out1 = document.getElementById("o1");
var out2 = document.getElementById("o2");
var out3 = document.getElementById("o3");
var out4 = document.getElementById("o4");
var out5 = document.getElementById("o5");
var out6 = document.getElementById("o6");
var out7 = document.getElementById("o7");
var out8 = document.getElementById("o8");
var out9 = document.getElementById("o9");
//The nine image slices for elements
var img1 = document.getElementById("outSlice1");
var img2 = document.getElementById("outSlice2");
var img3 = document.getElementById("outSlice3");
var img4 = document.getElementById("outSlice4");
var img5 = document.getElementById("outSlice5");
var img6 = document.getElementById("outSlice6");
var img7 = document.getElementById("outSlice7");
var img8 = document.getElementById("outSlice8");
var img9 = document.getElementById("outSlice9");
//The current value of each piece, corresponding to its pie chart length
var values = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var collaborate = ["(0) I communicate with other people.", "(1) I communicate what I am thinking with other people.", "(2) I communicate what I am thinking with other people. If someone helps me, I make plans.", "(3) I communicate my ideas and listen well to other people. I work with them to get something done.", "(4) I listen to other people, and respond with kindness and supportive feedback.", "(5) When there is conflict in a group I'm in, I help the group work through it.", "(6) When I'm working with others, I see that different people have different perspectives or views.", "(7)I give feedback, and when someone gives me feedback I consider how it can improve my work.", "(8) I work well with all different kinds of people. I give and recieve feedback respectfully."];
var communicate = ["(0) I let someone know if I need something.", "(1) If a teacher helps me, I am able to explain what I'm thinking.", "(2) I try to explain what I'm thinking out loud, and sometimes by writing it down or drawing it.", "(3) I communicate what I'm thinking and am comfortable writing.", "(4) I clearly communicate my thinking and understand that there are different forms of communication for different situations.", "(5) I choose the best way to communicate (speaking, writing, video, ect) for different types of situations", "(6) I independently communicate thoughts and ideas in a variety of ways (writing, speaking, analysis, ect) based on situations and contexts.", "(7) I clearly communicate my thoughts and ideas in a variety of ways (writing, speaking, analysis, ect) for specific purposes and contexts.", "(8) I clearly and respectfully communicate thoughts and ideas in a variety of ways(writing, speaking, analysis, etc...). I pay attention to who I'm talking / writing to, and the reasons I'm communicating. I'm respectful of people and appreciate their differences."];
var creativecritcalthinking = ["(0) With help, I recognize that different people might have different ideas.", "(1) With help, I describe an issue using evidence, arguments, opinions, and different points of view.", "(2) With a little help, I build on what I already know to explore an issue using evidence, arguments, opinions, and different points of view.", "(3) When I think about an issue, I consider evidence, arguments, claims, opinions, and alternate points of view to present my ideas.", "(4) I use data and evidence related to an issue to support my argument. I consider other points of view. ", "(5) I state at least two different sides of an issue. I use data and evidence to construct my argument. ", "(6) I state many different sides of an issue. I use data and evidence to make my case for the issue stronger. ", "(7) I analyze all sides of an issue and cite data and evidence for different perspectives. I defend my conclusion.", "(8) I analyze all sides of an issue in depth and cite data and evidence for different perspectives. I defend my conclusion about an issue using the data and evidence gathered."];
var financialliteracy = ["(0) With help, I tell how much something is worth, and compare it to other things.", "(1) I know different things are worth different amounts, and compare how much different things are worth.", "(2) With help, I make decisions about things like saving and spending money.", "(3) I make decisions about things like saving and spending money.", "(4) With help, I make decisions about money by using a budget and thinking about my long- term goals.", "(5) With help, I make decisions about money and finance, including making a budget, investing money, and using a credit card.", "(6) I analyze and make decisions about money and finance, including making a budget, investing money, and using a credit card.", "(7) With support, I think about why I made decisions about money and finance and how those decisions affect me and others in the world.", "(8) I explain why I made decisions about money and finance, and how those decisions affect me and others in the world."];
var informationliteracy = ["(0) With help, I figure out what I need to know to figure out a problem.", "(1) When I want to think about a problem, I figure out what information I need.", "(2) With help, I start to ask questions and do research about a problem.", "(3) I investigate things by researching information, and use what I learn to generate new questions.", "(4) With help, I research a topic, cite and summarize what I find. With help, I think about whether the information I found seems true and unbiased.", "(5) With help, I: research things; cite and summarize what I find; figure out if the information I found seems true; consider biases in the information.", "(6) I find, cite, and summarize information I researched. I critically evaluate things I find when researching.", "(7) With help, I research information, determine if it's credible and accurate, and create new and accurate information. I use information ethically and creatively.", "(8) I research information, determine if it's credible and accurate, and create new and accurate information. I use information ethically and creatively."];
var contentknowledge = ["(0) If someone helps me a lot, I learn how to do new things, and learn new ideas.", "(1) If someone helps me some of the time, I learn how to do new things, and learn new ideas.", "(2) I learn how to do new things and learn new ideas mostly on my own. I might need a little help every now and then.", "(3) When someone tells me the things I need to know and be able to do, I learn them with some help. If someone helps me a lot, I apply things I've learned to new situations.", "(4) When someone tells me the things I need to know and be able to do, I learn them with just a little help. I apply things I've learned to new situations with some help.", "(5) With some help, I figure out what I need to know and be able to do. With some help, I learn those things. With some help, I apply things I've learned to new situations.", "(6) With some help, I figure out what I need to know and be able to do, and go learn those things on my own. With some help, I apply things I've learned to new situations and make predictions.", "(7) On my own, I figure out what I need to know and be able to do, and go learn those things on my own. With a little help, I apply things I've learned to new situations and make predictions.", "(8) I learn on my own, and apply things I've learned to problems and situations I haven't seen before. I use what I've learned to make predictions about the future."];
var initiative = ["(0) When a teacher asks, I give ideas about things our class could do together.", "(1) I talk with (and listen to) people in my class about the things we are trying to do, and change what we are planning to do.", "(2) With a teacher's help, I make a goals for myself.", "(3) I describe why a goal I made for myself makes sense for me.", "(4) When I have a goal, I plan out some steps to reach it.", "(5) When I have a plan to reach a goal, I see if it still makes sense. If it doesn't, I revise the plan by talking through things with other people.", "(6) I develop and follow a plan of action to reach my goal.", "(7) I make a plan of action, think about how things went with that plan, recognize when things got in the way of that plan, and figure out how to work around problems.", "(8) I set goals for myself and work towards them. When things get tough, I think about those goals and make changes to my plans. I can reach my goals even in difficult conditions."];
var responsibilityresilience = ["(0) When others help, I learn that different people are good at different things. With help, I can think about things I want to do in the future.", "(1) When an adult helps me, I think about what different people are good at, and start to think about what I want to be good at.", "(2) I set goals for myself. I'm still finding out what I'm good at.", "(3) I set reasonable goals for myself, and use things I'm good at to work on reaching those goals.", "(4) I see things that other people are good at, and I'm glad for their strengths and differences. I know that having different strengths in a group helps us reach our goal.", "(5) I view problems and challenges as chances to get better at things. I set goals, and put important things first so I keep my focus.", "(6) I'm aware of and honest with myself about my strengths and weaknesses. I set goals to improve, and work independently towards those goals.", "(7) When I'm working with others, I stop to check how things are going and if we are still working towards our goal. I adjust if needed. I also use my own strengths and help others use theirs so we reach our goal.", "(8) I know the things I'm good at, and I find the things others are good at. I use these strengths to help us reach a goal we all share, and inspire those around me to be their best selves."];
var kindnessandempathy = ["(0) When someone helps me, I name and say what I'm feeling, and what someone else might feel. I am able to explain what it means to be helpful and kind.", "(1) I'm starting to figure out what other people are feeling, and I am able to talk about it. I know that what I say and do can impact how other people feel. I know that people are all different in lots of ways.", "(2) I listen to other people and think about how they are feeling. I know that what I say and do can impact how other people feel. With some help, I am able to say when something isn't fair, and say when someone isn't being treated fairly.", "(3) I describe what it seems like someone else is feeling. I know that the things I say and do can impact how other people feel. I know that people are different from each other in lots of different ways.", "(4) I can sometime see things through other people's eyes. I know that other people face different challenges than I do. When there are chances to do things to make my community better, I do them.", "(5) I treat others respectfully, and work well with others. I am able to evaluate injustices now and in the past.", "(6) I know people have biases that they aren't even aware of. I know that can make it harder to empathize for other people. I am able to describe and talk to others about ways we can oppose stereotyping and prejudice.", "(7) I know I am a citizen of my community and the world. I know I have responsibilities to my communities. I show that I care about others by speaking out against stereotyping and prejudice when I see them.", "(8) I am kind, respectful, and empathetic to everyone. I make sure everyone feels safe and valued. I know that people come from all different cultures, and I value those cultures."];

//The nine input functions for the sliders
sliderOne.oninput = function () {
    out1.innerHTML = collaborate[Number(this.value) - 1];
    values[0] = Number(this.value);
    setImageSlice(values[0], img1, 0);
    refreshCanvas();
}
sliderTwo.oninput = function () {
    out2.innerHTML = communicate[Number(this.value) - 1];
    values[1] = Number(this.value);
    setImageSlice(values[1], img2, 1);
    refreshCanvas();
}
sliderThree.oninput = function () {
    out3.innerHTML = creativecritcalthinking[Number(this.value) - 1];
    values[2] = Number(this.value);
    setImageSlice(values[2], img3, 2);
    refreshCanvas();
}
sliderFour.oninput = function () {
    out4.innerHTML = financialliteracy[Number(this.value) - 1];
    values[3] = Number(this.value);
    setImageSlice(values[3], img4, 3);
    refreshCanvas();
}
sliderFive.oninput = function () {
    out5.innerHTML = informationliteracy[Number(this.value) - 1];
    values[4] = Number(this.value);
    setImageSlice(values[4], img5, 4);
    refreshCanvas();
}
sliderSix.oninput = function () {
    out6.innerHTML = contentknowledge[Number(this.value) - 1];
    values[5] = Number(this.value);
    setImageSlice(values[5], img6, 5);
    refreshCanvas();
}
sliderSeven.oninput = function () {
    out7.innerHTML = initiative[Number(this.value) - 1];
    values[6] = Number(this.value);
    setImageSlice(values[6], img7, 6);
    refreshCanvas();
}
sliderEight.oninput = function () {
    out8.innerHTML = responsibilityresilience[Number(this.value) - 1];
    values[7] = Number(this.value);
    setImageSlice(values[7], img8, 7);
    refreshCanvas();
}
sliderNine.oninput = function () {
    out9.innerHTML = kindnessandempathy[Number(this.value) - 1];
    values[8] = Number(this.value);
    setImageSlice(values[8], img9, 8);
    refreshCanvas();
}
/* Funtion that sets the output value under a 
slider depending on its value.
val -  the current value of the slider
elm - the element whos text we want to set. */
function setOutputValue(val, elm) {
    switch (val) {
        case "1":
            elm.innerHTML = "Value 1";
            break;
        case "2":
            elm.innerHTML = "Value 2";
            break;
        case "3":
            elm.innerHTML = "Value 3";
            break;
        case "4":
            elm.innerHTML = "Value 4";
            break;
        case "5":
            elm.innerHTML = "Value 5";
            break;
        case "6":
            elm.innerHTML = "Value 6";
            break;
        case "7":
            elm.innerHTML = "Value 7";
            break;
        case "8":
            elm.innerHTML = "Value 8";
            break;
    }
}
/*Function that sets the image to display
for a slice depending on the given value*/
function setImageSlice(val, elm, imageId) {
    switch (val - 1) {
        case 0:
            elm.src = "images/BlankSlice.png";
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            switch (imageId) {
                case 0:
                    elm.src = "images/CollaborateSlice.png";
                    break;
                case 1:
                    elm.src = "images/CommunicateSlice.png";
                    break;
                case 2:
                    elm.src = "images/CandCSlice.png";
                    break;
                case 3:
                    elm.src = "images/FinancialLiteracySlice.png";
                    break;
                case 4:
                    elm.src = "images/InformationLiteracySlice.png";
                    break;
                case 5:
                    elm.src = "images/ContentKnowledgeSlice.png";
                    break;
                case 6:
                    elm.src = "images/InitiativeSlice.png";
                    break;
                case 7:
                    elm.src = "images/RandRSlice.png";
                    break;
                case 8:
                    elm.src = "images/KandESlice.png";
                    break;

            }
            //elm.src = "images/Slice8.png";
            break;
    }

}
//Click function for the screenshot button that saves an image of the canvas
document.getElementById("ss").addEventListener('click', function (e) {
    let canvasUrl = canvas.toDataURL("image/png", 0.5);
    console.log(canvasUrl);
    const createEl = document.createElement("a");
    createEl.href = canvasUrl;
    createEl.download = "Personal Student Facing Learning Continuum Selection";
    createEl.click();
    createEl.remove();

});
//Function called anytime a value is changed to update the canvas and display the correct pie chart
function refreshCanvas() {
    let rotAmount = 40;
    let translateAmnt = 228;
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(document.getElementById("outputImageBackground"), 0, 0, 600, 600);
    //Draw the nine pie chart pieces.
    ctx.translate(72, 72);
    ctx.drawImage(img1, GetSliceOffset(values[0]), GetSliceOffset(values[0]), GetSliceValue(values[0]), GetSliceValue(values[0]));
    ctx.translate(-72, -72);
    //Translate the origin to the center of the canvas in order for rotations to be computed properly
    ctx.translate(300, 300);
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img2, GetSliceOffset(values[1]) - translateAmnt, GetSliceOffset(values[1]) - translateAmnt, GetSliceValue(values[1]), GetSliceValue(values[1]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img3, GetSliceOffset(values[2]) - translateAmnt, GetSliceOffset(values[2]) - translateAmnt, GetSliceValue(values[2]), GetSliceValue(values[2]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img4, GetSliceOffset(values[3]) - translateAmnt, GetSliceOffset(values[3]) - translateAmnt, GetSliceValue(values[3]), GetSliceValue(values[3]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img5, GetSliceOffset(values[4]) - translateAmnt, GetSliceOffset(values[4]) - translateAmnt, GetSliceValue(values[4]), GetSliceValue(values[4]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img6, GetSliceOffset(values[5]) - translateAmnt, GetSliceOffset(values[5]) - translateAmnt, GetSliceValue(values[5]), GetSliceValue(values[5]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img7, GetSliceOffset(values[6]) - translateAmnt, GetSliceOffset(values[6]) - translateAmnt, GetSliceValue(values[6]), GetSliceValue(values[6]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img8, GetSliceOffset(values[7]) - translateAmnt, GetSliceOffset(values[7]) - translateAmnt, GetSliceValue(values[7]), GetSliceValue(values[7]));
    ctx.rotate((rotAmount * Math.PI) / 180);
    ctx.drawImage(img9, GetSliceOffset(values[8]) - translateAmnt, GetSliceOffset(values[8]) - translateAmnt, GetSliceValue(values[8]), GetSliceValue(values[8]));
    ctx.rotate((rotAmount * Math.PI) / 180);

    //Reset the transformation origin
    ctx.translate(-300, -300);
}
//Functions that calculates the scale of a pie slice and what its offset should be. This is done to only have 9
//Slices instead of 81. We need to use a switch function to scale linearly as returning (size-1)*50 doesn't do that.
function GetSliceValue(size) {
    return (size - 1) * 57;
}
function GetSliceOffset(size) {
    return (8 - (size - 1)) * 28.5;
}


