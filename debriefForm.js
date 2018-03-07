function drawDebriefForm(submitFunction) {
    // Create form
    let div = document.querySelector('.jspsych-content').appendChild(document.createElement('div'));
    div.id = 'debriefContainer';
    div.className = 'debrief';
    let header = div.appendChild(document.createElement('h1'));
    header.id = 'debriefTitle';
    div.className = 'debrief';
    header.innerText = 'finally...';
    let form = div.appendChild(document.createElement('form'));
    form.id = 'debriefForm';
    form.className = 'debrief';
    let manipulation = form.appendChild(document.createElement('div'));
    manipulation.id = 'debriefManipulationContainer';
    manipulation.className = 'debrief';
    let manipulationQ = manipulation.appendChild(document.createElement('div'));
    manipulationQ.id = 'debriefManipulationQuestion';
    manipulationQ.className = 'debrief';
    manipulationQ.innerHTML = 'The advisors differed from one another in their advice-giving. ' +
        'What do you think the difference between the advisors was?';
    let manipulationA = manipulation.appendChild(document.createElement('textarea'));
    manipulationA.id = 'debriefManipulationAnswer';
    manipulationA.className = 'debrief';
    let ok = form.appendChild(document.createElement('button'));
    ok.innerText = 'submit';
    ok.className = 'debrief jspsych-btn';
    ok.onclick = function(){submitFunction(form)};
}