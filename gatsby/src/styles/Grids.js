import styled from "styled-components";

export const HomePageGrid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

export const ItemsGrid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`;

//single grid item for home page
export const ItemStyles = styled.div`
    text-align: center;
    position: relative;
    img {
        height: auto;
        font-size: 0;
    }
    p {
        transform: rotate(-3deg) translateY(-50%);
        position: absolute;
        width: 100%; 
        left: 0;
    }
    .mark {
        display: inline;
    }
    @keyframes shine {
        from {
            background-position: 200%;
        }
        to {
            background-position: 40%;
        }
    }
    img.loading {
        --shine: var(--grey);
        --background: white;
        background-image: linear-gradient(
            45deg, 
            var(--background) 0px, 
            var(--shine) 200px, 
            var(--background) 40px
        );
        background-size: 500px;
        animation: shine 2s infinite linear;
    }
`;