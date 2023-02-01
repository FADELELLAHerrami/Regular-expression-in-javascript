# Recevoir et renvoyer des chaînes de caractères :  
## Création de l'objet ServerSocket :  
`ServerSocket ss = new ServerSocket(port);`  
## Attendre une connectiond'un client   
`Socket s = ss.accept();`  
## Pour lire une chîne de caractère envovoyée par le client :  
`InputStream is = s.getInputStream();`  

    ici l'objet is lire juste un octet (qui est envoyée par un client) , alors pour lire un ensemble des octets , on utilise un objet de InputStreamReader  
`InputStreamReader isr = new InputStreamReader(is);`  
    
    et pour lire un caractère on utlise un objet de BufferReader()

`BufferReader br = new BufferReader();`