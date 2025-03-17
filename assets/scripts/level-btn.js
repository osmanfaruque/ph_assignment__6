const displayLevelBtn = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/levels/all');
        const data = await response.json();
        const levelBtn = data.data;
        const levelBtnContainer = document.getElementById('level-btn-container');

        if (!levelBtn || levelBtn.length === 0) {
            // Display a message if no levels are found
            levelBtnContainer.innerHTML = '<div class="text-center p-4">No levels found</div>';
            return;
        }
        levelBtnContainer.innerHTML = '';
        for (const level of levelBtn) {
            const btnElement = document.createElement('div');
            // Check if level_no exists, otherwise show "Level not found"
            const levelText = level.level_no ? `Lesson: ${level.level_no}` : "Level not found";

            btnElement.innerHTML = `
            <button id="level-${level.level_no}"
            onclick="loadVocab(${level.level_no})" 
            class="btn box-border rounded-md border-[#422AD5] text-[#422AD5] focus:bg-[#422AD5] hover:bg-[#422AD5] focus:text-white hover:text-white">
            <i class="fa-solid fa-book-open"></i>${levelText}
            </button>
            `;
            levelBtnContainer.appendChild(btnElement);
        }
    }
    catch (error) {
        console.error('Error loading levels:', error);
        const levelBtnContainer = document.getElementById('level-btn-container');
        if (levelBtnContainer) {
            levelBtnContainer.innerHTML = '<div class="text-center p-4 text-red-500">Failed to load levels</div>';
        }
    }
};
displayLevelBtn();