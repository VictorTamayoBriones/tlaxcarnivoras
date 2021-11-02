import styled from 'styled-components';

export const CokiesModal = () =>{

    return (
        <Modal>
            <p>Hola que tal?, aceptas unas galletas?</p>
            <button>Aceptar</button>
        </Modal>
    )

}

const Modal = styled.div`
    background: teal;
    width: 80%;
    padding: 12px;
    position: fixed;
    bottom: 0;
    left: 10%;
    right: 10%;
    font-size: 20px;
    border-radius: 5px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    transition: .7s ease;
    &:hover{
        background: #000;
    }
    p{
        color: #fff;
        letter-spacing: 2px;
    }
`;