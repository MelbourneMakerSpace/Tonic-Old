<script
			  src="https://code.jquery.com/jquery-3.2.1.js"
			  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
			  crossorigin="anonymous"></script>
		

<form action="API/login/" method = "post">
<input id = "credentials" name="credentials" value='{"login":"kirk","password":"8asd8asd8asd8"}' />
<button type="submit" value="test login"/>


</form>


<form action="API/member/135" method = "post">
<input type="hidden" name="_method" value="DELETE">
<button type="submit" />DELETE</button>
</form>


<form action="API/member/152" method = "post">
<input type="hidden" name="_method" value="PUT">
<input type="hidden" name="data" value='{"firstName":"asdasd", "lastName":"guy", "phone":"123123asdasd123", "email":"test@testasdasd.com", "paypalEmail":"elon@paypal.com", "emergencyName":"bob", "emergencyPhone":"123", "emergencyEmail":"bill@microsoft.com", "rid":"9", "password":"123"}'>
<button type="submit" />UPDATE</button>
</form>


<form action="API/member" method = "post">
<input type="hidden" name="_method" value="POST">
<input type="hidden" name="data" value='{"firstName":"asdasd", "lastName":"guy", "phone":"123123asdasd123", "email":"test@testasdasd.com", "paypalEmail":"elon@paypal.com", "emergencyName":"bob", "emergencyPhone":"123", "emergencyEmail":"bill@microsoft.com", "rid":"9", "password":"424242"}'>
<button type="submit" />CREATE</button>
</form>
