package com.bala.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import twitter4j.ResponseList;
import twitter4j.Trends;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;

@RestController
public class TwitterController {

	@RequestMapping(value = "/getTrendingList", method = RequestMethod.GET)
	public List<String> getTrendintTweets(){
		
		Twitter twitter = new TwitterFactory().getInstance();
        ResponseList<Trends> dailyTrends;
        
//        dailyTrends = twitter.getAvailableTrends();

        System.out.println();
		return null;

        // Print the trends.
 /*       for (Trends trends : dailyTrends) {
                    System.out.println("As of : " + trends.getAsOf());
//                      for (Trend trend : trends.getTrends()) {
//                            System.out.println(" " + trend.getName());
                       }
//        }
		
		return null;
		*/
	}
}
