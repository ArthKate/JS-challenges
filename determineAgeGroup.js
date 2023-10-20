const determineAgeGroup = () => {
    //chapter user's year of birth
    const YOB = prompt('please enter the year you were born');
    //check if person is a youth
    if (YOB >= 18 && YOB <= 36) return("Youth");
    // if person is a elder
    else if (YOB > 36) return("Elder");
    //check whether person is still a minor
    else return("Minor");
};


console.log(determineAgeGroup());