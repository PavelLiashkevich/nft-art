import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../../../styles/Theme'

export const MobileMenu = (props: { menuItems: Array<string> }) => {

	const [open, setOpen] = useState(false)
	
	const onBurgerBtnClick = () => { setOpen(!open) }

	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={open} onClick={onBurgerBtnClick}>
				<span></span>
			</BurgerButton>
			<MobileMenuPopup isOpen={open} onClick={() => setOpen(false)}>
				<ul>
					{props.menuItems.map((item, index) => {
						return (
							<ListItem key={index}>
								<Link href=''>{item}</Link>
							</ListItem>
						)
					})}
				</ul>
			</MobileMenuPopup>
		</StyledMobileMenu>
	)
}

const StyledMobileMenu = styled.nav`
	display: none;

	@media ${theme.media.tablet} {
		display: block;
	}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;

	top: -100px;
	right: -100px;

	height: 200px;
	width: 200px;
	z-index: 9999;

	span {
		display: block;
		width: 24px;
		height: 2px;
		background-color: ${theme.colors.primary};

		position: absolute;
		left: 40px;
		bottom: 50px;

		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`}

		::before {
			content: '';
			display: block;
			width: 24px;
			height: 2px;
			background-color: ${theme.colors.primary};
			position: absolute;
			transform: translateY(-6px);

			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(-45deg) translateY(0);
				`}
		}

		::after {
			content: '';
			display: block;
			width: 24px;
			height: 2px;
			background-color: ${theme.colors.primary};
			position: absolute;
			transform: translateY(6px);

			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(45deg) translateY(0);
				`}
		}
	}
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
	position: fixed;
	background-color: rgba(0, 2, 13, 0.782);
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 999;
	display: none;

	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			display: flex;
			justify-content: center;
			align-items: center;
		`}

	ul {
		display: flex;
		gap: 40px;
		flex-direction: column;
		align-items: center;

		li > a {
			color: ${theme.colors.disable};
		}
	}
`

const ListItem = styled.li`
	padding-bottom: 1px;
	:hover {
		border-bottom: 1px solid ${theme.colors.secondary};
	}
`

const Link = styled.a`
	:hover {
		color: ${theme.colors.primary};
	}
`
