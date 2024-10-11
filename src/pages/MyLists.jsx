import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider"; 
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import MyPostCard from "../components/MypostCard";
import Swal from "sweetalert2";

const MyLists = () => {
    const { userCurrent } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        // Change this URL to your localhost API endpoint
        fetch(`http://localhost:5010/all-tourist-spot/${userCurrent?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            });
    }, [userCurrent, Loading]);

    // Delete 

    const handleDeleteItem = (id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5010/deleteItem/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            setLoading(!Loading);
                            toast.success("Item Deleted");
                        } else {
                            toast.error("No items were updated");
                        }
                        console.log(data);
                    });
            } else {
                
                toast.info("Deletion cancelled");
            }
        });
    };
    

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My List | ExploreEasy</title>
            </Helmet>
            <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
                <div className="container">
                    <div className="max-w-[750px] mx-auto text-center mb-[80px]">
                        <h2 className="text-4xl text-center font-bold tracking-tight sm:text-6xl">My Tourist Spots</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                        {
                            item?.map(itemSpot => (
                               <MyPostCard key={itemSpot._id} itemSpot={itemSpot} handleDeleteItem={handleDeleteItem}></MyPostCard>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyLists;
