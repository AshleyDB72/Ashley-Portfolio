const astroSigns = [" Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius" ,"Pisces"]
const sayining =["Meeting adversity well is the source of your strength.", "Keep your eye out for someone special.", "When fear hurts you, conquer it and defeat it!", "Our deeds determine us, as much as we determine our deeds.", "Let the deeds speak.", "Wealth awaits you very soon.", "Joys are often the shadows, cast by sorrows.", "You are very talented in many ways.", "Nothing astonishes men so much as common sense and plain dealing.", "It is now, and in this world, that we must live.", "Now is the time to try something new.", "Your ability for accomplishment will follow with success.", "Everyone agrees. You are the best.", "You learn from your mistakes... You will learn a lot today.", "Now is the time to try something new."]
var years =[];
var currentYear = new Date().getFullYear()
// This setup the array years[]
const setYears = () => {
    for (let i=20; i>=0;i--){
        years[i]= currentYear+i
    }
    return years
}
// generates a new message
const newSaying= () => {
    var part1 =sayining[Math.floor(Math.random()* sayining.length)] // chooses a saying
    var part2 = astroSigns[Math.floor(Math.random()* astroSigns.length)] // selectes a astronomical sign
    var year=setYears()
    var part3 = years[Math.floor(Math.random()* years.length)]// sets the year 
    if (part3 === undefined){
        part3 = currentYear
    }
    console.log("If you are a "+ part2 +".  In the years of "+ part3+" you can expect "+part1)
}
var getSaying=newSaying()