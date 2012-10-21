#pragma strict

private var guiHealth : GUIText;
private var updateInterval = 1.0;
private var lastInterval : double; // Last interval end time

function Start () {
	lastInterval = Time.realtimeSinceStartup;
}

function Update () {
    var timeNow = Time.realtimeSinceStartup;
    if (timeNow > lastInterval + updateInterval)
    {
    	ShowHealth();

        lastInterval = timeNow;
    }
}

function ShowHealth()
{
	if (!guiHealth)
	{
		var go : GameObject = new GameObject("Health Display", GUIText);
		go.hideFlags = HideFlags.HideAndDontSave;
		go.transform.position = Vector3(0,0,0);
		guiHealth = go.guiText;
		guiHealth.pixelOffset = Vector2(5,5);
	}
	var healthValue:float = 
	guiHealth.text = "Health: " + ;
}