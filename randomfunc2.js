if( msg.payload === false ) {
    return null;
}
msg.payload = Math.round(Math.random()*320);
return msg;
