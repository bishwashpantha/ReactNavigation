import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

function ModalPage(){
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = <Modal onClose = {handleClose} actionBar = {actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return(
        <div>
            <Button onClick = {handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem velit. Proin et aliquet tortor. Duis pharetra velit mauris, eu vestibulum justo pellentesque ut. Proin sed facilisis ex. Aenean nec consectetur tortor. Vestibulum sollicitudin feugiat turpis, eu volutpat libero vestibulum ac. Mauris non felis non turpis molestie congue. Sed eu neque convallis, viverra lacus et, pulvinar justo. Vestibulum faucibus et libero pulvinar luctus. Nullam condimentum nisi id arcu pretium, eget ultricies lectus consectetur. Praesent auctor auctor nunc non cursus. Duis pulvinar efficitur felis, sed tempor leo sagittis in. Integer ut ligula non metus porta gravida at non urna. Maecenas luctus dignissim erat, vel bibendum ex pulvinar et.
            </p>
        </div>
    )
}

export default ModalPage