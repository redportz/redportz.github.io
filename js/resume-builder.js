document.addEventListener('DOMContentLoaded', function () {
    fetch('/JSON/resume-items.json')
        .then(response => response.json())
        .then(data => {
            const skillsContainer = document.getElementById('Skills-list');
            data.skills.forEach(item => {
                const skill = item.skill;
                const div = document.createElement('div');
                div.classList.add('skill');
                div.innerHTML = `
                    <input type="checkbox" class="list-of-skills" id="skill-${skill}" name="skill" value="${skill}">
                    <label for="skill-${skill}">${skill}</label>
                `;
                skillsContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading JSON', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('/JSON/resume-items.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-list');
            data.projects.forEach(item => {
                const project = item.name;
                const div = document.createElement('div');
                div.classList.add('project');
                div.innerHTML = `
                    <input type="checkbox" class="list-of-projects" id="project-${project}" name="project" value="${project}">
                    <label for="project-${project}">${project}</label>
                `;
                projectsContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading JSON', error));
});

function customResume() {
    const selectedSkills = [];
    const selectedProjects = [];

    document.querySelectorAll('input[name="skill"]:checked').forEach(checkbox => {
        selectedSkills.push(checkbox.value);
    });

    document.querySelectorAll('input[name="project"]:checked').forEach(checkbox => {
        selectedProjects.push(checkbox.value);
    });

    console.log('Selected skills:', selectedSkills);
    console.log('Selected projects:', selectedProjects);
    // You can perform any function here with the selected skills and projects
    // Example:
    alert('You selected skills: ' + selectedSkills.join('* ') + '\nSelected projects: ' + selectedProjects.join('* '));
}
