import{ Event } from './event';

export interface Page{
        content:Event[],
        pageable:{
           sort:{
              empty:boolean,
              sorted:boolean,
              unsorted:boolean
           },
           offset:number,
           pageSize:number,
           pageNumber:number,
           unpaged:boolean,
           paged:boolean
        },
        last:false,
        totalElements:number,
        totalPages:number,
        size:number,
        number:number,
        sort:{
           empty:boolean,
           sorted:boolean,
           unsorted:boolean
        },
        first:boolean,
        numberOfElements:number,
        empty:boolean
     }