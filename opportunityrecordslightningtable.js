import { LightningElement,wire } from 'lwc';
import getOpportunityList from '@salesforce/apex/opprtunityrecords1.getOpportunityList';

const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name', type: 'Text' },
    { label: 'Amount', fieldName: 'Amount', type: 'Currency' },
];

export default class Opportunityrecordslightningtable extends LightningElement {

    error;
    columns = columns;

    @wire(getOpportunityList)
    opportunity;
}