function showmail( id)
{
	var element = document.getElementById(id);
	var nospamplease = element.getAttribute( 'href' );
	var str_out = ''; 
	var num_out = '';
	var num_in;
	var hex = '0123456789abcdef'
	num_out = nospamplease;  
	for(i = 0; i < num_out.length; i += 2)
	{
		num_in1 = ''
		num_in = parseInt(num_out.substr(i,2)) + 23;
		while (num_in != 0)
		{
			num_in1 = hex.charAt(num_in%16)+num_in1;
			num_in = num_in >> 4;
		}
		num_in = unescape('%' + num_in1);
		str_out += num_in;
		str_out = unescape(str_out);
	}
	nospamplease = str_out;
       nospamplease = nospamplease.replace( /%0/g, "" );
	element.setAttribute( 'href', 'mailto:' + nospamplease );
	element.setAttribute( 'title', nospamplease );
}