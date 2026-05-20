let currentTab ='all';

function jobCount(){
    const jobs = document.getElementById('job-list').childElementCount;
    
    const totalJobCount = document.getElementById('job-count');
    totalJobCount.innerText = jobs;

}

document.addEventListener('DOMContentLoaded', jobCount);

function status(button, decision){

    const jobCard = button.parentElement.parentElement;
    const statusBtn = jobCard.querySelector('.job-status');

    if(decision === 'interview'){
        statusBtn.innerText = 'INTERVIEW';
        jobCard.dataset.status = "interview"
        statusBtn.className = `job-status py-2 px-3  text-white bg-[#10B981]/75 rounded-sm`;
        jobCard.className = `job-card space-y-6 p-6 bg-[#ffffff] rounded-lg hover:translate-y-1 transition-all duration-200 border-s-4 border-[#10B981]`;
    }
    if(decision === 'rejected'){
        statusBtn.innerText = 'REJECTED';
        jobCard.dataset.status = "rejected"
        statusBtn.className = `job-status py-2 px-3  text-white bg-[#EF4444]/75 rounded-sm`;
        jobCard.className = `job-card space-y-6 p-6 bg-[#ffffff] rounded-lg hover:translate-y-1 transition-all duration-200 border-s-4 border-[#EF4444]`;
    }  
    
    showOnly(currentTab);
}

function statusList(){
    const interviewList = document.querySelectorAll('[data-status="interview"]')
    const rejectList = document.querySelectorAll('[data-status="rejected"]')
    
    const interviewCount = document.getElementById('interview-count');
    interviewCount.textContent = interviewList.length;

    const rejectCount = document.getElementById('reject-count');
    rejectCount.textContent = rejectList.length;
}