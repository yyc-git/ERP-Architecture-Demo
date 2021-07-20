eunm DataItemType = {
    Selection,
    Date,
    Input
}

type DataItemVO = {
    name: string,
    value: string,
    type: "text" | "date" | "section"
}

type DataItemDO = {
    name: string,
    value: string,
    type: DataItemType
}

type DataItemPO = {
    name: string,
    value: string,
    type: DataItemType
}

// PO<=>DO
let PersonManageRepo = {
    PersonRepo: {
        getAllDataItems: (personID): Array<DataItemDO> => {
            let dataItems: Array<DataItemPO> = getAllDataItemsFromServer(personID);

            //convert po to do

            return dataItems;
        }
    }
}


// DO<=>DO
let Domain = {
    PersonManage: {
        Person: {
            getAllDataItems: (personID) => {
                return PersonManageRepo.getAllDataItems(personID);
            }
        }
    }
}

// VO <=>DO

let Application = {
    PersonManageService: {
        getAllDataItem: (personID): Array<DataItemVO> => {
            //convert vo to do
            personID = personID;

            return Domain.PersonManage.Person.getAllDataItems(personID).map((dataItemDO) => {
                return {
                    name: dataItemDO.name,
                    value: dataItemDO.value,
                    type: dataItemDO.type -> convert
                }
            });
        }
    }
}

export let AddPerson = () => {
    return <section>
        <form>
    Application.PersonManageService.getAllDataItems(personID).reduce((dataItem:DataItemVO, arr) =>{
        return arr.push(
            <span>{dataItem.name}</span>
            <inpute type={dataItem.type} value={dataItem.value}>);
    }) -> renderArray
        </form>
    </section>
}