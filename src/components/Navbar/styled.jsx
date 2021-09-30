import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    position: absolute;
    h2{
        font-family: 'Creepster', cursive;
        color: #fff;
        font-size: 32px;
        letter-spacing: 5px;
        &:hover{
            cursor: pointer;
        }
    }
    svg{
        color: #fff;
        display: none;
    }
    ul{
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
        animation-duration: 0s;
        li{
            width: max-content;
        }
        a{
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 930px){
        align-items: flex-start;
        ul{
            flex-direction: column;
            background: #00311d;
            width: max-content;
            position: absolute;
            padding: 12px 18px;
            border-radius: 8px;
            right: 5px;
            top: 50px;
            box-shadow: -5px 5px 8px rgba(0, 0, 0, 0.3);
            z-index: 100;
            visibility: hidden;
            animation-duration: .5s !important; /* don't forget to set a duration! */
        }
        svg{
            display: block;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;

const Toggle = styled.div`
    width: 50%;
    
    @media (max-width: 930px){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`;

export { Nav, Toggle };