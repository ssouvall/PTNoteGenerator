//create subjective object
var subjective = {
    responses: {
        goodNoAdverse: ['Pt reports that they tolerated last treatment well with no adverse effect.', 'Pt denies pain or adverse effects from last treatment.', 'Pt reports good tolerance to last treatment.'],
        get goodResponse() {
            var goodIndex = Math.floor(Math.random() * this.goodNoAdverse.length);
            return this.goodNoAdverse[goodIndex];
        },
        improvement: ['Pt reports improvement in symptoms since last treatment.', 'Pt reports that last treatment was helpful and improved symptoms.', 'Pt reports a reduction in symptoms following last treatment.'],
        get improvementLevel() {
            var impIndex = Math.floor(Math.random() * this.improvement.length);
            return this.improvement[impIndex];
        },
        improvedMotion: 'Pt reports improvement in ROM ',
        get motionImprovement() {
            return this.improvedMotion;
        },
        muscleTone: 'Following last treatment, pt is experiencing decreased muscle tension',
        get muscleToneLevel() {
            return this.muscleTone;
        },
        functionalActivity(activity) {
            return `Pt reports improved ability to ${activity} since last treatment.`
        },
        stronger: 'States feeling stronger after last treatment. ',
        strong() {
            subjArray.push(this.stronger)
        },
        tepid: 'Pt reports they are feeling no change since last treatment.',
        get tepidness() {
            return this.tepid;
        },
        bad: 'Pt reports they are feeling increased pain today following last treatment.',
        get badness() {
            return this.bad;
        },
        incPain: 'Pt reports feeling increased pain after last treatment. ',
        decPain: 'Pt reports symptoms have decreased by ',
        other(input) {
            subjArray.push(`${input}`)
        }
    },
    pain: {
        rating: ['0/10', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10'],
        side: ['right', 'left', 'bilateral'],
        region: ['neck', 'shoulder', 'upper back', 'mid back', 'lower back', 'hip', 'knee', 'ankle', 'foot'],
        description: ['sharp', 'aching', 'burning', 'numb/tingling', 'stinging'],
        painRating(ratingIndex, sideIndex, regionIndex, descriptionIndex) {
            if(ratingIndex === '' || sideIndex === '' || regionIndex === '' || descriptionIndex === '') {
                return '';
            }
            var painNumber = this.rating[ratingIndex];
            var sides = this.side[sideIndex];
            var regions = this.region[regionIndex];
            var describe = this.description[descriptionIndex];
            return `Describes current pain to ${sides} ${regions} as ${painNumber} and ${describe}.`
        }
    },
    events: {
        doctorFollowUp: {
            followUpDr() {
                subjArray.push('Reports physician follow-up since last treatment. ')
            },
            visitDescribe(value) {
                subjArray.push(value)
            },
            other(value) {
                subjArray.push(value)
            }
        },
        fall: {
            yesFall() { 
                subjArray.push('Reports falling since last treatment. ')
            },
            description(value){
                subjArray.push(value)
            }
        },
        overdoneHEP() {
            subjArray.push('Reports feeling they may have overdone it with their HEP since their last treatment which caused increased symptoms. ')
        },
        overdoneExercise(value) {
            subjArray.push(`Feels that the ${value} were most aggravating. `)
        },
        overdoneActivity(value) {
            subjArray.push(`Pt feels they may have overdone it with ${value} since last treatment which increased their symptoms. `)
        },
        sick: {
            wasSick() {
                subjArray.push('Reports being sick since last treatment. ')
            }, 
            descSymp(value) {
                subjArray.push(value)
            }
        },
        didActivity: {
            activity(value) {
                subjArray.push(`Pt reports ${value} since last treatment. `)
            },
            response(value) {
                subjArray.push(`This caused ${value} `)
            }
        },
        otherEvent(enterEvent) {
            return `${enterEvent}`
        }
    },
    recovery: {
        isPTHelping: ['Reports PT is really helping.', 'Reports PT is helping.', 'Reports PT might be helping.', 'Reports PT is not helping.', 'Reports being unsure if PT is helping.'],
        ptHelping(index) {
            subjArray.push(this.isPTHelping[index])
        },
        progress: ['Feels they are progressing well with PT.', 'Feels that symptoms are improving overall.', 'Feels that pain is getting worse overall.', 'Feels that symptoms have remained about the same.', 'Feels that balance is improving and is becoming less afraid of falling.', 'Feels that they are getting stronger.', 'States that numbness/tingling is decreasing.', 'States that numbness/tingling is increasing.', 'States they are feeling less fear of falling since starting PT.'],
        progressResponse(index) {
            subjArray.push(this.progress[index])
        },
        returnAct(act) {
            subjArray.push(`Reports being able to return to ${act}.`)
        },
        stillUnable(act1) {
            subjArray.push(`Reports being unable to ${act1}.`)
        }

    },
    hep: {
        frequency: ['Reports daily adherence to HEP.', 'Reports doing HEP every other day.', 'Reports doing HEP a couple of times.', 'Reports doing HEP once since last treatment.', 'Has not done HEP since last treatment.'],
        getHep(userHep) {
            //if user responds daily
            if(userHep === 'daily') {
                //return frequency[0]
                subjArray.push(this.frequency[0]);
            //else if user reports every other day
            } else if(userHep === 'every-other-day') {
                //return frequency[1]
                subjArray.push(this.frequency[1]);
            //else if user reports a couple times
            } else if(userHep === 'couple-times') {
                //return frequency[2]
                subjArray.push(this.frequency[2]);
            //else if user reports once
            } else if(userHep === 'once') {
                //return frequency[3]
                subjArray.push(this.frequency[3]);
            //else if user reports none
            } else if(userHep === 'no-hep') {
                //return frequency[4]
                subjArray.push(this.frequency[4])
            }
        }
    }    
};


//create objective object
var objective = {
    tests: {
        bodyAspect: ['anterior', 'lateral', 'medial', 'posterior', 'superior', 'inferior'],
        bodySides: ['left', 'right', 'bilateral'],
        bodyRegion: ['head', 'neck', 'shoulder', 'thoracic spine', 'lower back', 'pectorals', 'abdomen', 'hip', 'thigh', 'knee', 'calf', 'lower leg', 'ankle', 'foot'],
        ttp: ['0/4', '1/4', '2/4', '3/4', '4/4'],
        rangeOfMotion: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180],
        motions: ['flexion', 'extension', 'abduction', 'adduction', 'rotation', 'sidebending', 'pronation', 'supination', 'plantarflexion', 'dorsiflexion', 'external rotation', 'internal rotation'],
        motionGrades: ['excessive', 'reduced', 'normal', 'hypomobile', 'hypermobile']
    }
};

//create assessment object
var assessment = {
    stage(input) {
        if(input === 'acute') {
            assessmentArray.push('Acute stage of recovery. ')
        } else if(input === 'subacute') {
            assessmentArray.push('Subacute stage of recovery. ')
        } else if(input === 'chronic') {
            assessmentArray.push('Chronic stage of recovery. ')
        } else if(input === 'maximum-protection') {
            assessmentArray.push('Maximum protection phase of recovery. ') 
        } else if(input === 'moderate-protection') {
            assessmentArray.push('Moderate protection phase of recovery. ')
        } else if(input === 'return-to-function') {
            assessmentArray.push('Return-to-function phase of recovery. ')
        } else if(input === 'return-to-sport') {
            assessmentArray.push('Return-to-sport phase of recovery. ')
        } else if(input === 'return-to-work') {
            assessmentArray.push('Return-to-work phase of recovery. ')
        }
    },
    treatmentTolerance: ['Pt tolerated treatment very well.', 'Pt tolerated treatment well.', 'Pt tolerated treatment fair.', 'Pt tolerated treatment poorly.'],
    tolerance(index) {
        assessmentArray.push(this.treatmentTolerance[index])
    },
    reasons: ['No adverse effects.', 'Demonstrates increased symptoms following session today. ', 'Demonstrates decreased symptoms following PT session today. ', 'Demonstrates increased TTP to affected area following treatment. ', 'Demonstrates decreased TTP to affected area following treatment. ', 'Demonstrates decreased muscle tone to affected area following treatment. ', 'Demonstrates increased muscle tone to affected area following treatment', 'Demonstrates increased pain in affected area following treatment. ', 'Demonstrates decreased pain in affected area following treatment. ', 'Demonstrates improvement in ROM to affected area following treatment today. '],
    reason(index) {
        assessmentArray.push(this.reasons[index])
    },
    result: ['decreased antalgic gait', 'improved tolerance to gait', 'improved gait mechanics', 'improved gait safety', 'decreased reliance on AD', 'improved ability to perform overhead reaching tasks', 'improved ability to tolerate ADLs', 'improved ability to tie shoes', 'improved ability to perform functional lifting/carrying tasks', 'improved ability to climb stairs', 'improved ability to dress', 'improved ability to wash self', 'decreased fall risk', 'improved ability to participate in work-specific activities', 'improved ability to perform sport-specific movements', 'improved home safety', 'decreased caregiver dependence', 'improved bed mobility', 'improved transfers'],
    motions: ['flexion', 'extension', 'abduction', 'adduction', 'rotation', 'sidebending', 'pronation', 'supination', 'plantarflexion', 'dorsiflexion', 'external rotation', 'internal rotation'],
    motionGrades: ['excessive', 'reduced', 'normal', 'hypomobile', 'hypermobile'],
    bodyAspect: ['anterior', 'lateral', 'medial', 'posterior', 'superior', 'inferior'],
    bodySides: ['left', 'right', 'bilateral'],
    bodyRegion: ['head', 'neck', 'shoulder', 'thoracic spine', 'lower back', 'pectorals', 'abdomen', 'hip', 'thigh', 'knee', 'calf', 'lower leg', 'ankle', 'foot'],
    state: ['improved', 'worsened', 'decreased', 'increased'],
    contDeficits: ['strength', 'balance', 'range of motion', 'gait', 'safe and effective use of AD', 'HEP adherence', 'proprioception'],
    funcDeficits: ['gait safety', 'ambulation', 'home safety', 'fall risk', 'community mobility', 'household mobility', 'functional independence', 'ability to return to sport', 'ability to perform work tasks', 'ADLs', 'bathing', 'dressing', 'self-care', 'driving', 'school'],
    asEvidencedBy(index) {
        assessmentArray.push(`Progressing well as evidenced by ${this.result[index]}. `)
    },
    conDeficits() {
        assessmentArray.push('Pt demonstrates continued deficits to ')
    },
    contDeficitsList(index){
        assessmentArray.push(this.contDeficits[index])
    },
    functDeficits() {
        assessmentArray.push('Continued functional deficits evident to ')
    },
    funcDeficitsList(index) {
        assessmentArray.push(this.funcDeficits[index])
    },
    contTherapy() {
        assessmentArray.push('Pt will benefit from continued skilled PT treatment to address these deficits in order to maximize return to highest level of function. ')
    }
};

//create plan object
var plan = {
    continuePerPOC: 'Continue skilled PT treatment per POC. ',
    contPOC() {
        planArray.push(this.continuePerPOC)
    },
    freq(input) {
        planArray.push(`Reduce frequency to ${input} times per week. `)
    },
    addExercise(input) {
        planArray.push(`Add ${input} next treatment. `)
    },
    progStrength(region) {
        return `Progress ${region} strengthening per pt tolerance.`
    },
    indTransition() {
        planArray.push('Transition to independent next treatment. ')
    },
    dcNext(treatmentNum) {
        planArray.push(`D/c in ${treatmentNum} visits. `)
    }

};

var subjArray = [];
var objArray = [];
var assessmentArray = [];
var planArray = [];

function good() {
    var goodTreatment = subjective.responses.goodResponse
    subjArray.push(goodTreatment)
};

function symptomImprovement() {
    var improvedSx = subjective.responses.improvementLevel
    subjArray.push(improvedSx)
}

function symptomPercent(value) {
    var percentImp = `Symptom improvement by ${value} reported. `
    subjArray.push(percentImp)
}

function motionImprovement() {
    var betterMotion = subjective.responses.motionImprovement
    subjArray.push(betterMotion)
}

function motionImprovementSide(value) {
    var betterMotionSide = `${value} `;
    subjArray.push(betterMotionSide)
}

function motionImprovementPart(value) {
    var betterMotionPart = `${value} `;
    subjArray.push(betterMotionPart)
}

function motionImprovementMotion(value) {
    var betterMotionMotion = `${value}. `;
    subjArray.push(betterMotionMotion)
}

function toneImprovement() {
    var betterTone = subjective.responses.muscleToneLevel
    subjArray.push(betterTone)
}

function toneImprovementMuscle(value) {
    var text;
    var muscleImproved = document.getElementById('muscle').value;
    
    switch(muscleImproved) {
        case "cps":
            text = " to cervical paraspinals.";
            break;
        case "scalenes":
            text = " to scalenes.";
            break;
        case "scm":
            text = " to sternocleidomastoid.";
            break;
        case "pecs":
            text = " to pectorals."
            break;
        case "upper-trap":
            text = " t0 upper traps."
            break;
        case "deltoids":
            text = " to deltoid.";
            break;
        case "bicep":
            text = " to bicep.";
            break;
        case "tricep":
            text = " to tricep.";
            break;
        case "wrist-extensors":
            text = " to wrist extensors.";
            break;
        case "wrist-flexors":
            text = " to wrist flexors.";
            break;
        case "tps":
            text = " to thoracic paraspinals.";
            break;
        case "lps":
            text = " to lumbar paraspinals.";
            break;
        case "psoas":
            text = " to psoas.";
            break;
        case "ql":
            text = " to quadratus lumborum.";
            break;
        case "piriformis":
            text = " to piriformis.";
            break;
        case "tfl":
            text = " to tensor fasciae latae.";
            break;
        case "quads":
            text = " to quads.";
            break;
        case "hamstrings":
            text = " to hamstrings.";
            break;
        case "popliteus":
            text = " to popliteus.";
            break;
        case "gastroc-soleus":
            text = " to gastroc/soleus.";
            break;
        case "tibant":
            text = " to tibialis anterior.";
            break;
        case "tibpost":
            text = " to tibialis posterior";
            break;
        case "peroneals":
            text = " to peroneals.";
            break;
        case "foot-int":
            text = " to foot intrinsics."
            break;
        default:
            text = "."

    }
    subjArray.push(text);
}


function improvedActivity() {
    var activityHasImproved = 'Improved ability to do '
    subjArray.push(activityHasImproved);
}

function specificActivity(value) {
    var activityImproved = document.getElementById("subj-activity").value;
    subjArray.push(`${activityImproved}.`)
}

function noChange() {
    var hasNotChanged = subjective.responses.tepidness;
    subjArray.push(hasNotChanged)
}


function painUp() {
    var morePain = subjective.responses.incPain
    subjArray.push(morePain)
}

function painRating(value) {
    if(value === 'rate') {
        subjArray.push('')
    } else if (value === '1') {
        subjArray.push('Describes 1/10 ')
    } else if (value === '2') {
        subjArray.push('Describes 2/10 ') 
    } else if (value === '3') {
        subjArray.push('Describes 3/10 ')
    } else if (value === '4') {
        subjArray.push('Describes 4/10 ')
    } else if (value === '5') {
        subjArray.push('Describes 5/10 ')
    } else if (value === '6') {
        subjArray.push('Describes 6/10 ')
    } else if (value === '7') {
        subjArray.push('Describes 7/10 ') 
    } else if (value === '8') {
        subjArray.push('Describes 8/10 ')
    } else if (value === '9') {
        subjArray.push('Describes 9/10 ')
    } else if (value === '10') {
        subjArray.push('Describes 10/10 ')
    } else if (value === '0') {
        subjArray.push('Describes 0/10 ')
    }
} 

function painDescription(value) {
    if(value === 'description') {
        subjArray.push('')
    } else if (value === 'sharp') {
        subjArray.push('sharp pain to affected area.')
    } else if (value === 'aching') {
        subjArray.push('aching pain to affected area.')
    } else if (value === 'burning') {
        subjArray.push('burning pain to affected area.')
    } else if (value === 'nt') {
        subjArray.push('numbness/tingling to affected area.')
    } else if (value === 'stinging') {
        subjArray.push('stinging pain to affected area.')
    }
}

function decreasedPain() {
    var painDecreased = subjective.responses.decPain;
    subjArray.push(painDecreased)
}

function painPercent(value) {
    if(value === 'prcp') {
        subjArray.push('')
    } else if(value === '10p') {
        subjArray.push('10% since start of care. ') 
    } else if(value === '20p') {
        subjArray.push('20% since start of care. ')
    } else if(value === '30p') {
        subjArray.push('30% since start of care. ')
    } else if(value === '40p') {
        subjArray.push('40% since start of care. ')
    } else if(value === '50p') {
        subjArray.push('50% since start of care. ')
    } else if(value === '60p') {
        subjArray.push('60% since start of care. ')
    } else if(value === '70p') {
        subjArray.push('70% since start of care. ')
    } else if(value === '80p') {
        subjArray.push('80% since start of care. ')
    } else if(value === '90p') {
        subjArray.push('90% since start of care. ')
    } else if(value === '100p') {
        subjArray.push('100% since start of care. ')
    }
}

function other(value) {
    subjArray.push(value)
}

function ratePain(value) {
    if(value === 'ratep') {
        subjArray.push('')
    } else if(value === '0p') {
        subjArray.push('Current symptoms described as 0/10 ')
    } else if(value === '1p') {
        subjArray.push('Current symptoms described as 1/10 ')
    } else if(value === '2p') {
        subjArray.push('Current symptoms described as 2/10 ')
    } else if(value === '3p') {
        subjArray.push('Current symptoms described as 3/10 ')
    } else if(value === '4p') {
        subjArray.push('Current symptoms described as 4/10 ')
    } else if(value === '5p') {
        subjArray.push('Current symptoms described as 5/10 ')
    } else if(value === '6p') {
        subjArray.push('Current symptoms described as 6/10 ')
    } else if(value === '7p') {
        subjArray.push('Current symptoms described as 7/10 ')
    } else if(value === '8p') {
        subjArray.push('Current symptoms described as 8/10 ')
    } else if(value === '9p') {
        subjArray.push('Current symptoms described as 9/10 ')
    } else if(value === '10p') {
        subjArray.push('Current symptoms described as 10/10 ')
    }
}

function painDescribe(value) {
    if(value === 'description1') {
        subjArray.push('')
    } else if(value === 'sharp1') {
        subjArray.push('sharp pain to ')
    } else if(value === 'aching1') {
        subjArray.push('aching pain to ')
    } else if(value === 'burning1') {
        subjArray.push('burning pain to ')
    } else if(value === 'nt1') {
        subjArray.push('numbness and tingling to ')
    } else if(value === 'stinging1') {
        subjArray.push('stinging pain to ')
    }
}

function painSide(value) {
    if(value === 'sidep') {
        subjArray.push('')
    } else if(value === 'leftp') {
        subjArray.push('left ')
    } else if(value === 'rightp') {
        subjArray.push('right ')
    } else if(value === 'bilateralp') {
        subjArray.push('bilateral ')
    }
}

function painRegion(value) {
    if(value === 'body-regionp') {
        subjArray.push('')
    } else if(value === 'headp') {
        subjArray.push('head. ')
    } else if(value === 'neckp') {
        subjArray.push('neck. ')
    } else if(value === 'shoulderp') {
        subjArray.push('shoulder. ')
    } else if(value === 'chestp') {
        subjArray.push('chest. ')
    } else if(value === 'abdomenp') {
        subjArray.push('abdomen. ')
    } else if(value === 'tspinep') {
        subjArray.push('thoracic spine. ')
    } else if(value === 'lspinep') {
        subjArray.push('lumbar spine. ')
    } else if(value === 'hipp') {
        subjArray.push('hip. ')
    } else if(value === 'thighp') {
        subjArray.push('thigh. ')
    } else if(value === 'buttockp') {
        subjArray.push('buttock. ')
    } else if(value === 'kneep') {
        subjArray.push('knee. ')
    } else if(value === 'lower-legp') {
        subjArray.push('lower leg. ')
    } else if(value === 'calfp') {
        subjArray.push('calf. ')
    } else if(value === 'anklep') {
        subjArray.push('ankle. ')
    } else if(value === 'footp') {
        subjArray.push('foot. ')
    }
}

function aggravation(value) {
    subjArray.push(value)
}

/*document.getElementById("submit").addEventListener("click", function displayNote () {
    var noteOutput = subjArray.join(' ') + '\n' + '\n' + assessmentArray.join(' ') + '\n' + '\n' + planArray.join(' ');
    document.getElementById('result').innerHTML = noteOutput;
   
});*/

function disappearSectionOne() {
    document.getElementById("soap-note-section1").style.display = "none";
    document.getElementById("soap-note-section2").style.display = "block";
}

function disappearSectionTwo() {
    document.getElementById("soap-note-section2").style.display = "none";
    document.getElementById("soap-note-section3").style.display = "block";
}

function disappearSectionThree() {
    document.getElementById("soap-note-section3").style.display = "none";
    document.getElementById("soap-note-section4").style.display = "block";
}

function disappearSectionFour() {
    document.getElementById("soap-note-section4").style.display = "none";
    document.getElementById("soap-note-section5").style.display = "block";
}

function disappearSectionFive() {
    document.getElementById("soap-note-section5").style.display = "none";
    document.getElementById("soap-note-section6").style.display = "block";
}

function disappearSectionSix() {
    document.getElementById("soap-note-section6").style.display = "none";
    document.getElementById("soap-note-section7").style.display = "block";
}

function disappearSectionSeven() {
    document.getElementById("soap-note-section7").style.display = "none";
    document.getElementById("soap-note-section8").style.display = "block";
}

function disappearSectionEight() {
    document.getElementById("soap-note-section8").style.display = "none";
    document.getElementById("soap-note-section9").style.display = "block";
}

function disappearSectionNine() {
    document.getElementById("soap-note-section9").style.display = "none";
    document.getElementById("soap-note-section10").style.display = "block";
}

function disappearSectionTen() {
    document.getElementById("soap-note-section10").style.display = "none";
    document.getElementById("soap-note-section11").style.display = "block";
}

function disappearSectionEleven() {
    document.getElementById("soap-note-section11").style.display = "none";
    document.getElementById("soap-note-section12").style.display = "block";
}

function disappearSectionTwelve() {
    document.getElementById("soap-note-section12").style.display = "none";
    document.getElementById("results-text").style.display = "block";
    document.getElementById("result").style.display = "block";
    document.getElementById("start-over").style.display = "block";
}

function displayResults() {
    var resultBlock = document.getElementById("result").style.display;
    var noteOutput = subjArray.join(' ') + '\n' + '\n' + assessmentArray.join(' ') + '\n' + '\n' + planArray.join(' ');
    if(resultBlock == "block") {
        document.getElementById('result').innerHTML = noteOutput;
    }
}

function startOver() {
    location.reload();
}