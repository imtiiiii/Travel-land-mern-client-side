//this component will keep the form to add more services
//rook hook form will be used here 
import './AddService.css';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // function(onSubmit) to to send data to the database
    const onSubmit = data => {
        reset();
        const newService = {
            title: data.title,
            description: data.description,
            price: data.price,
            url: data.imgUrl
        };
        // sending the data to database
        axios.post('http://localhost:5000/services', newService)
            .then(data => {
                // console.log(data);
            })

    }
    return (
        <div className="add-service-container d-flex align-items-center justify-content-center flex-column ">

            <div className="add-service-form-container   d-flex align-items-center justify-content-center  w-100">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column p-5 shadow">
                    <h1 className="text-danger">Add a service</h1>
                    {/* register your input into the hook by invoking the "register" function */}
                    {/* --------------title field ------------------ */}
                    <input defaultValue="" {...register("title", { required: true },)} placeholder="Title" className="form-control" />

                    {/* include validation with required or other standard HTML validation rules */}
                    {/* ------------description field------------ */}
                    <textarea defaultValue="" {...register("description", { required: true },)} placeholder="Description" className="form-control" />
                    {/* ----------price ------- */}
                    <input defaultValue="" {...register("price", { required: true },)} placeholder="Price" className="form-control" />
                    {/* ------------image link */}
                    <input defaultValue="" {...register("imgUrl", { required: true },)} placeholder="image-url" className="form-control" />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" className="btn btn-outline-success" />
                </form>
            </div>
        </div>
    );
};

export default AddService;