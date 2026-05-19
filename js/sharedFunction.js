function showOnly(id){
    const jobs = document.getElementById('jobs');
    const interview = document.getElementById('interview');
    const rejected = document.getElementById('rejected');

    jobs.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");


    document.getElementById(id).classList.remove("hidden");

}

function btnActive(btn){

    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('btn-interview');
    const btnRejected = document.getElementById('btn-rejected');

    btnAll.className = "w-20 h-8 rounded-lg bg-white text-[#64748B]";
    btnInterview.className = "w-20 h-8 rounded-lg bg-white text-[#64748B]";
    btnRejected.className = "w-20 h-8 rounded-lg bg-white text-[#64748B]";

    if(btn == 'all'){
        btnAll.className = "w-20 h-8 rounded-lg bg-[#3B82F6] text-white";
    }

    if(btn == 'interview'){
        btnInterview.className = "w-20 h-8 rounded-lg bg-[#3B82F6] text-white";
    }

    if(btn == 'rejected'){
        btnRejected.className = "w-20 h-8 rounded-lg bg-[#3B82F6] text-white";
    }
}