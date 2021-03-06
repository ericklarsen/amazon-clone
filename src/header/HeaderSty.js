import styled from 'styled-components'

export const HeaderWrap = styled.nav`
    background-color: #131921;
    display : flex;
    align-items : center;
    position : sticky;
    width : 100%;
    top : -1px;
    z-index : 100;
    
    .header__logo{
        width : 100px;
        margin-left : 20px;
        margin-right : 20px;
        margin-top : 18px;
        object-fit : contain;
    }

    .header__search{
        display : flex;
        flex : 1;

        .header__input{
            height : 12px;
            padding : 10px;
            border : none;
            width : 100%;
        }
        .header__searchIcon{
        background-color: #cd9042;
        padding : 5px;
        height : 22px !important;
        }
    }
    .header__nav{
            display : flex;
            justify-content : space-evenly;

            .header__link{
                color: white;
                text-decoration :none;

                .header__option{
                    display : flex;
                    flex-direction : column;
                    margin : 0 10px;
                    
                    .header__optionLineOne{
                        font-size : 10px;
                    }
                    
                    .header__optionLineTwo{
                        font-size : 13px;
                        font-weight : 800;
                    }
                    
                }
                .header__optionBasket{
                    display : flex;

                    .header__optionBold{
                    font-size : 13px;
                    font-weight : 800;
                    margin : 0 10px;
                    }
                }   
            }

            
    }
`