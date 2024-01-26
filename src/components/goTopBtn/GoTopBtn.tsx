import styled from "styled-components";
import { animateScroll as scroll } from 'react-scroll';

import { Icon } from "../icon/Icon";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

	return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={ () => scroll.scrollToTop()}>
                    <Icon iconId={'arrowTop'} width='40' height='40' viewBox='0 0 30 30' />
                </StyledGoTopBtn>   
            )}
        </>
        
    )
}

const StyledGoTopBtn = styled.button `
    position: fixed;
    right: 50px;
    bottom: 50px;

    :hover {
        cursor: pointer;
    }
`