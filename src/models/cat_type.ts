// local models
import { mcq_type } from './mcq_question';

export interface cat_type {
    cat_name: string,
    questions: Array<mcq_type>
};