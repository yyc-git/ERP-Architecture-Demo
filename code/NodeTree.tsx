type NodeVO = {
    name: string,
}

type NodeDO = {
    name: string,
    ...
}

type NodePO = {
    name: string,
    ...
}

// PO<=>DO
let PersonManageRepo = {
    CompanyRepo: {
        getAllNodes: (companyID): Array<NodeDO> => {
            let nodes: Array<NodePO> = getAllNodesFromServer(companyID);

            //convert po to do

            return nodes;
        }
    }
}


// DO<=>DO
let Domain = {
    PersonManage: {
        Company: {
            getAllNodes: (companyID) => {
                return PersonManageRepo.CompanyRepo.getAllNodes(companyID);
            }
        }
    }
}

// VO <=>DO

let Application = {
    PersonManageService: {
        getAllNodes: (companyID): Array<NodeVO> => {
            //convert vo to do
            companyID = companyID;


            return Domain.PersonManage.Company.getAllNodes(companyID).map((nodeDO) => {
                return nodeDO.name
            });
        }
    }
}

export let NodeTree = () => {
    return <section>
    Application.PersonManageService.getAllNodes(companyID).reduce((node:NodeVO, arr) =>{
            let {name} = node;

        return arr.push(<span>name</span>);
    }) -> renderArray
    </section>
}