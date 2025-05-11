document.addEventListener('DOMContentLoaded', () => {
    fetch('/JSON/projects.json') // Ensure the correct path
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('skills-display');
            data.projects.forEach((project ,index) => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
                projectDiv.innerHTML = `
                    <i id="project-${index}" class="fa-solid fa-xmark"></i>
                    <img src="${project.icon}" alt="${project.name}">
                    <h3>${project.name}</h3>
                `;
                projectDiv.addEventListener('click', () => {
                    toggleDetails(project.name, project.details, projectDiv, index);
                });
                container.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});

function toggleDetails(projectName, projectDetails, clickedDiv, projectNumber) {
    const container = document.getElementById('skills-display');
    const detailsContainer = document.getElementById('projects-container');
    // Check if the details container is currently displaying the clicked project
    const isCurrentlyDisplayed = detailsContainer.style.display === 'block' && detailsContainer.getAttribute('data-current-project') === projectName;
    let closebtn = document.getElementById('project-' + projectNumber)
    
    // Hide all skill buttons except the one clicked
    const allProjects = container.querySelectorAll('.project');
    
    closebtn.style.display = 'block';

    allProjects.forEach(project => {
        if (project !== clickedDiv) {
            project.style.display = 'none';
        } else {
            project.style.display = 'block';
        }
    });

    if (isCurrentlyDisplayed) {
        // If the same project is clicked again, show all skills and remove the 'onclick' class
        closebtn.style.display = 'none';

        allProjects.forEach(project => {
            project.style.display = 'block';
        });
        detailsContainer.style.display = 'none';
        detailsContainer.removeAttribute('data-current-project');
        container.classList.remove('onclick');
    } else {
        // Display the clicked skill details and add the 'onclick' class
        detailsContainer.innerHTML = `
            <h3>Projects Using ${projectName}</h3>
            <ul>
                ${projectDetails.map(detail => `
                    <li>
                        ${detail.icon}
                        <a href="${detail.url}" target="_blank">${detail.name}</a>
                    </li>
                `).join('')}
            </ul>
        `;
        detailsContainer.style.display = 'block';
        detailsContainer.setAttribute('data-current-project', projectName);
        container.classList.add('onclick');
    }
}