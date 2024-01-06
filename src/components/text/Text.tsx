import React from 'react'

type TextPropsType = {
	text: any
}

export const Text = (props: TextPropsType) => {
	return <>{props.text}</>
}
