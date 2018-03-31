/* Pinout:
 * Joystick:
 * SW - Undefined
 * VRy - A2
 * VRx - A3
 * LED Matrix:
 * DIN - D2
 * CS - D3
 * CLK - D4
 * LCD screen:
 * SCl - A5
 * SDA - A4
 * 
 */

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#include "LedControl.h"
#define dataPin 2
#define CLK 4
#define CS 3

#define OLED_RESET 4

#define LOGO16_GLCD_HEIGHT 16 
#define LOGO16_GLCD_WIDTH  16 
#if (SSD1306_LCDHEIGHT != 32)
#error("Height incorrect, please fix Adafruit_SSD1306.h!");
#endif

Adafruit_SSD1306 display(OLED_RESET);
  LedControl lc=LedControl(dataPin,CLK,CS,1); 
  
void setup() {
  // put your setup code here, to run once:
   Serial.begin(9600);
  pinMode(12, INPUT);

  // by default, we'll generate the high voltage from the 3.3v line internally! (neat!)
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);  // initialize with the I2C addr 0x3C (for the 128x32)
  // init done

  display.clearDisplay(); 
    lc.shutdown(0,false);
  /* Set the brightness to a medium values */
  lc.setIntensity(0,8);
  /* and clear the display */
  lc.clearDisplay(0);

    display.setTextSize(3);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
    display.print("Start:");
    display.print("3"); 
        display.display();
  delay(1000);
  display.clearDisplay();
   display.setCursor(0,0);
  display.print("Start:");
  display.print("2");
      display.display(); 
  delay(1000);
  display.clearDisplay();
   display.setCursor(0,0);
  display.print("Start:");
  display.print("1"); 
      display.display();
  delay(1000);
  display.clearDisplay();
}
  byte ledArray[8];
  int i=0;
  int j=0;
  int num1=0, num2=0;
  int score =5;
  int timee=0;
  bool failed = false;
  int TotalScore =0;
  int timer = 50;
void loop() {
  timee++;
  display.setTextSize(3);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
    display.print("Time:");
    display.print(score);  
    display.display();
if((timee%timer)==0){
  timee=0;
  score--;
  if(TotalScore%10==0){
    timer = round(0.8 *timer);
  }
}
if(score==0){
  failed = true;
}

 i=analogRead(3);
 j=analogRead(2);
 i=(int)round(i/128);
 j=(int)round(j/128);
 for (int ii=0;ii<8;ii++){
  ledArray[ii]= B00000000;
 }
  bitWrite(ledArray[i],j,1);
  bitWrite(ledArray[num1],num2,1);
 
 
if((i==num1)&&(j==num2))
{
    num1=random(0,8);
  num2=random(0,8);
  score++;  
  TotalScore++;
  
}
 for(int row =0;row<8;row++){
     lc.setRow(0,row,ledArray[row]);
 }
 delay(1);
    display.clearDisplay();
    if(failed){
      lc.clearDisplay(0);
        display.setTextSize(3);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
      display.print("Dead");  
      display.setTextSize(2);
      display.print(TotalScore);
  display.setTextColor(WHITE);
  
    display.display();
    Serial.println(TotalScore);
    
    while(1){
      
    }
    }

}
