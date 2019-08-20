import React from 'react';
import AccordionItem from '../containers/AccordionItem'

const accordionData = [
    {
        'id': 1,
        'heading': 'First Item',
        'content': 'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum',
        'icon': 'filter_drama'
    },
    {
        'id': 2,
        'heading': 'Second Item',
        'content': 'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum',
        'icon': 'place'
    },
    {
        'id': 3,
        'heading': 'Third Item',
        'content': 'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum' +
            'LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum',
        'icon': 'whatshot'
    }
];

class AccordionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<ul class="accordion_parent">
            {accordionData.map(accordionItem =>
                <AccordionItem
                    key={accordionItem.id}
                    {...accordionItem}
                />
            )}
        </ul>);
    }
}

export default AccordionList;