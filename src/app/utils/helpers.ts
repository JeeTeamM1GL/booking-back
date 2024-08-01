export const getBreadCrumbLabel = (key : string) : string => {
    let result="";
    switch (key) {
        case "myspace":
            result= "Mon espace";
            break;
        case "home":
            result= "Accueil";
            break;
        case "users":
            result= "Utilisateurs";
            break;
        default:
            result = key;
            break;
    }
    return result;
}

export const formatDate = (record : any) => {
    return (record === null || record === undefined || record === "") ? "" : new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(record));
}