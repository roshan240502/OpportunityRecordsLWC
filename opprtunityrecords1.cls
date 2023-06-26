public with sharing class opprtunityrecords1 {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityList() {
        return [SELECT Id, Name, Amount FROM Opportunity ORDER BY Amount DESC LIMIT 5];
    }
}