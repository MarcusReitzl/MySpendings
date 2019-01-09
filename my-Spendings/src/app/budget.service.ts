import { Budget } from './shared/budget.model';


export class BudgetService {
 budgets: Budget[] = [];


 onAddBudget(budget: Budget){
    this.budgets.push(budget);
 }

 getBudgets(){
     return this.budgets;
 }

 getSingleBudget(id:number){
     if(this.budgets[+id]){
        return this.budgets[+id];
     }
    
 }
}