void setup() {
  pinMode(6,OUTPUT);
  pinMode(3,OUTPUT);
  pinMode(5,OUTPUT);
 Serial.begin(9600);
}

int Leds[3]={0,170,85};
int Up[3] ={1,1,0};

void loop() {
for(int i=0;i<3;i++){
  if(Leds[i]==255){
    Up[i]=0;
  }
  else if(Leds[i]==0){
    Up[i]=1;
  }
  if(Up[i]==1){
    Leds[i]++;
  }
  else{
    Leds[i]--;
  }
}
analogWrite(6,Leds[0]);
analogWrite(3,Leds[1]);
analogWrite(5,Leds[2]);
delay(1);
}

