const toggleAccordion = (state = { collapsibleItem : null }, action) => {
    switch (action.type) {
        case 'TOGGLEACCORDIONITEM':
            return (
                (state.collapsibleItem === action.id)
                    ? {...state, collapsibleItem: null}
                    : {...state, collapsibleItem: action.id}
            )
        default:
            return state
    }
}

export default toggleAccordion
