#import <Foundation/Foundation.h>
#import "RCTTextDetectionModule.h"
#import <React/RCTLog.h>
#import <AVFoundation/AVFoundation.h>
#import <VisionKit/VisionKit.h>
#import <Vision/Vision.h>

@import MLKit;

@implementation RCTTextDetectionModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(recognizeImage:(NSString *)url  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  
  RCTLogInfo(@"URL: %@", url);
  
  NSURL *_url = [NSURL URLWithString:url];
  NSData *imageData = [NSData dataWithContentsOfURL:_url];
  UIImage *image = [UIImage imageWithData:imageData];
  
  MLKVisionImage *visionImage = [[MLKVisionImage alloc] initWithImage:image];
  visionImage.orientation = image.imageOrientation;
  
  MLKTextRecognizerOptions *latinOptions = [[MLKTextRecognizerOptions alloc] init];
  MLKTextRecognizer *textRecognizer = [MLKTextRecognizer textRecognizerWithOptions:latinOptions];
  
  [textRecognizer processImage:visionImage
                    completion:^(MLKText *_Nullable result,
                                 NSError *_Nullable error) {
    if (error != nil || result == nil) {
      reject(@"text_recognition", @"text recognition is failed", nil);
      return;
    }
    NSMutableDictionary *response= [NSMutableDictionary dictionary];
    
    NSMutableArray *blocks = [NSMutableArray array];
    
    for (MLKTextBlock *block in result.blocks) {
      NSMutableDictionary *blockDict = [NSMutableDictionary dictionary];
      [blockDict setValue: block.text forKey:@"text"];
      [blocks addObject: blockDict];
    }
    
    [response setValue:blocks forKey:@"blocks"];
    
    resolve(response);
  }];
  
}

@end
