//
//  RCTGlobalpass.m
//  wallet
//
//  Created by Daria on 18.09.2023.
//

#import "RCTGlobalpass.h"
#import <FaceTecSDK/FaceTecSDK.h>
#import <GlobalPass/GlobalPass.h>


@implementation RCTGlobalpass

RCT_EXPORT_MODULE();

+ (UIViewController*) topMostController
{
    UIViewController *topController = [UIApplication sharedApplication].keyWindow.rootViewController;

    while (topController.presentedViewController) {
        topController = topController.presentedViewController;
    }

    return topController;
}

RCT_EXPORT_METHOD(buildKYCDev:(NSString *)screeningToken
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSError *error;

  [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentDev
                                                       screeningToken:screeningToken
                                                                error:&error];

  if (error != nil) {
    reject(@"0", @"GlobalPass", error);
    return;
  }
  
  //UIViewController *controller = [UIApplication sharedApplication].keyWindow.rootViewController;

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *controller = [GlobalPassSDK startScreeningWithExternalID:@"122"];

    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;
    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{

    }];
  });
  
  NSNumber *eventId = [NSNumber numberWithInt:123];
  resolve(@"123");
};

RCT_EXPORT_METHOD(buildKYCProd:(NSString *)screeningToken
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSError *error;
  [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentProd
                                                       screeningToken:screeningToken
                                                                error:&error];

  if (error != nil) {
    reject(@"0", @"GlobalPass", error);
    return;
  }

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *controller = [GlobalPassSDK startScreeningWithExternalID:@"122"];
    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;
    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{

    }];
  });
};

RCT_EXPORT_METHOD(buildIBDev:(NSString *)instantBiometricsID
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSError *error;
  [GlobalPassSDK setupInstantWithEnvironment:GlobalPassEnvironmentDev
                                                instantBiometricsId:instantBiometricsID
                                                              error:&error];

  if (error != nil) {
    reject(@"0", @"GlobalPass", error);
    return;
  }

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *controller = [GlobalPassSDK startInstant];
    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;
    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{

    }];
  });
};

RCT_EXPORT_METHOD(buildIBProd:(NSString *)instantBiometricsID
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSError *error;
  [GlobalPassSDK setupInstantWithEnvironment:GlobalPassEnvironmentProd
                                                instantBiometricsId:instantBiometricsID
                                                              error:&error];

  if (error != nil) {
    reject(@"0", @"GlobalPass", error);
    return;
  }

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *controller = [GlobalPassSDK startInstant];
    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;
    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{

    }];
  });
};

RCT_EXPORT_METHOD(buildSplitKYCDev:(NSString *)screeningToken
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSError *error;

  [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentDev
                                                       screeningToken:screeningToken
                                                                error:&error];

  if (error != nil) {
    reject(@"0", @"GlobalPass", error);
    return;
  }

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *controller = [GlobalPassSDK startSplitScreeningWithType:GPSplitFlowAddress externalID:nil];

    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;
    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{

    }];
  });
};

RCT_EXPORT_METHOD(buildSplitKYCProd:(NSString *)screeningToken
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSError *error;
  [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentProd
                                                       screeningToken:screeningToken
                                                                error:&error];

  if (error != nil) {
    reject(@"0", @"GlobalPass", error);
    return;
  }

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *controller = [GlobalPassSDK startSplitScreeningWithType:GPSplitFlowAddress externalID:nil];
    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;
    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{

    }];
  });
};

@end
