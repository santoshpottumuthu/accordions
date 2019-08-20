import React from 'react';
import '../styles/AccordionItem.scss';
import { toggleAccordionItem } from "../actions";
import { connect } from 'react-redux';
// import MaterialIcon from '@material/react-material-icon/index.scss';

const AccordionItem = (props) => (
    <li className={"accordion_item"}
        id={`accordionItem_`+props.id}>
        <div className={"accordion_heading"}
             onClick={() => props.toggleAccordionItem(props.id)}>
            <i class="material-icons">{props.icon}</i>
            {props.heading}
        </div>
        <div className={"accordion_body " + (props.collapsibleItem === props.id ? "accordion_show" : '')}>
            {props.content}
        </div>
    </li>
)

const mapStateToProps = state => ({
    ...state.toggleAccordion
})

const mapDispatchToProps = dispatch => ({
    toggleAccordionItem: id => dispatch(toggleAccordionItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccordionItem);