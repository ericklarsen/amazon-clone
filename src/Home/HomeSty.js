import styled from 'styled-components'

export const HomeWrap = styled.div`
    max-width : 1500px;
    margin-left : auto;
    margin-right : auto;

    .home__image{
        position : relative;
        width : 100%;
        mask-image : linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
        z-index  : -1;
        margin-bottom : -150px;
    }

    .home__row{
        display : flex;
        z-index : 1;
        margin : 0 5px;
    }
`