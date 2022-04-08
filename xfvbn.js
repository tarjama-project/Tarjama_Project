import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import * as actions from "../actions/signIn";



export default function Profile() {
    const myInfos = useSelector(state => state.userInfoState);
    const dispatch = useDispatch();
    const [updateState, setUpdateState] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const showUbdateForm = () => {
        setUpdateState(!updateState);
        setShowForm(!showForm);
    }

    const updateMyInfo = (e) => {
        e.preventDefault();

        const form = e.target;
        const myNewData = {
            id: myInfos.id,
            name: form.name.value,
            username: form.username.value,
            email: form.email.value,
            address: {
                street: form.street.value,
                suite: form.suit.value,
                city: form.city.value,
                zipcode: form.zip.value,
                geo: {
                    lat: form.lat.value,
                    lng: form.lng.value
                }
            },
            phone: form.phone.value,
            website: form.website.value,
            company: {
                name: form.companyName.value,
                catchPhrase: form.CatchPhrase.value,
                bs: form.bs.value
            }
        }
        console.log("New Data ==> ", myNewData);

        // here we will use the dispatch to update the data
        dispatch(actions.user_Update_Info(myNewData));

        showUbdateForm();
    }


    return (
        <div>
<h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Profile </h1>
<button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Info</button>

            <div class="grid grid-cols-3 gap-4 flex items-center">
                <div class="mb-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">

                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">personal Info</div>
                            <br></br>
                            <div class="justify-start" >
                                <div class="flex justify-start " > <span class="font-bold ">name:</span>{myInfos.name}</div><br></br>

                                <div class=" flex justify-start" ><span class="font-bold ">UserName:</span>{myInfos.username}</div><br></br>


                                <div class=" flex justify-start" ><span class="font-bold "> Email: </span>{myInfos.email}</div><br></br>

                                <div class=" flex justify-start" > <span class="font-bold "> Phone: </span>{myInfos.phone}</div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold "> Website:</span> {myInfos.website}</div><br></br>

                            </div>
                        </div>
                        <div class="px-6 pt-4 pb-2">

                        </div>
                    </div>
                </div>

                <div class="mb-4">

                    <div class="max-w-sm rounded overflow-hidden shadow-lg">

                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Company Info</div>
                            <br></br>
                            <div class="justify-start" >
                                <div class="flex justify-start " > <span class="font-bold ">company Name:</span>{myInfos.company?.name}</div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold "> Bs:</span>{myInfos.company?.bs}</div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold ">CatchPhrase:</span>{myInfos.company?.catchPhrase}</div><br></br>




                                <div class=" flex justify-start" > <span class="font-bold ">  </span></div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold "></span> </div><br></br>

                            </div>
                        </div>
                        <div class="px-6 pt-4 pb-2">

                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">

                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Address</div>
                            <br></br>
                            <div class="justify-start" >
                                <div class="flex justify-start " > <span class="font-bold ">Street:</span>{myInfos.address?.street}</div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold ">Suite:</span>{myInfos.address?.suite}</div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold ">City:</span>{myInfos.address?.city}</div><br></br>




                                <div class=" flex justify-start" > <span class="font-bold "> Longitude & Latitude: </span> {myInfos.address?.geo.lng} {myInfos.address?.geo.lat}</div><br></br>
                                <div class=" flex justify-start" ><span class="font-bold ">Zipcode:</span>{myInfos.address?.zipcode}</div><br></br>

                            </div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="grid grid-cols-2 gap-4">
  <div>01</div>
 
  <div>09</div>
</div> */}
            {/* <h1>Profile</h1>
    <span id="updateFormSpan" onClick={showUbdateForm}> Update My Data </span>
    <div>
        <p>Name: {myInfos.name}</p>
        <p>UserName: {myInfos.username}</p>
        <p>Email: {myInfos.email}</p>
        <p>Phone: {myInfos.phone}</p>
        <p>Website: {myInfos.website}</p>
        <h3> Company </h3>
        <p>Name: {myInfos.company?.name}</p>
        <p>CatchPhrase: {myInfos.company?.catchPhrase}</p>
        <p>Bs: {myInfos.company?.bs}</p>
        <h3> Address </h3>
        <p>Street: {myInfos.address?.street} </p>
        <p>Suite: {myInfos.address?.suite} </p>
        <p>City: {myInfos.address?.city} </p>
        <p>Longitude: {myInfos.address?.geo.lng} </p>
        <p>Latitude: {myInfos.address?.geo.lat} </p>
        <p>Zipcode: {myInfos.address?.zipcode} </p>
    </div> */}

            <Modal show={showForm} onHide={showUbdateForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Infos</Modal.Title>
                </Modal.Header>
                <Form onSubmit={updateMyInfo}>
                    <Modal.Body>
                        {/* personal */}
                        <FormGroup>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control name="name" type="text" defaultValue={myInfos.name} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>UserName: </Form.Label>
                            <Form.Control name="username" type="text" defaultValue={myInfos.username} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control name="email" type="text" defaultValue={myInfos.email} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Phone: </Form.Label>
                            <Form.Control name="phone" type="text" defaultValue={myInfos.phone} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Website: </Form.Label>
                            <Form.Control name="website" type="text" defaultValue={myInfos.website} />
                        </FormGroup>
                        {/* Company */}
                        <FormGroup>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control name="companyName" type="text" defaultValue={myInfos.company?.name} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>CatchPhrase: </Form.Label>
                            <Form.Control name="CatchPhrase" type="text" defaultValue={myInfos.company?.catchPhrase} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>BS: </Form.Label>
                            <Form.Control name="bs" type="text" defaultValue={myInfos.company?.bs} />
                        </FormGroup>
                        {/* Address */}
                        <FormGroup>
                            <Form.Label>Street: </Form.Label>
                            <Form.Control name="street" type="text" defaultValue={myInfos.address?.street} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Suit: </Form.Label>
                            <Form.Control name="suit" type="text" defaultValue={myInfos.address?.suite} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>City: </Form.Label>
                            <Form.Control name="city" type="text" defaultValue={myInfos.address?.city} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Logitude: </Form.Label>
                            <Form.Control name="lng" type="text" defaultValue={myInfos.address?.geo.lng} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Latitude: </Form.Label>
                            <Form.Control name="lat" type="text" defaultValue={myInfos.address?.geo.lat} />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Zipcode: </Form.Label>
                            <Form.Control name="zip" type="text" defaultValue={myInfos.address?.zipcode} />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>


            </Modal>

        </div>
    )


}