// use local storage to manage cart data
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const addToDb = id => {
    let appliedJobInfo = getAppliedJobInfo();
    // add quantity
    const quantity = appliedJobInfo[id];
    if (!quantity) {
        appliedJobInfo[id] = 1;
        toast.success('Great! You are Now applied for this job')
    }

    else {
        toast.warn('You are already applied for this job')

    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobInfo));
}

const removeFromDb = id => {
    const appliedJobInfo = getAppliedJobInfo();
    if (id in appliedJobInfo) {
        delete appliedJobInfo[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobInfo));
    }
}

const getAppliedJobInfo = () => {
    let appliedJobInfo = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-jobs');
    if (storedCart) {
        appliedJobInfo = JSON.parse(storedCart);
    }
    return appliedJobInfo;
}

const deleteAppliedJobInfo = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobInfo,
    deleteAppliedJobInfo
}
